#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import https from 'https';
import { marked } from 'marked';

// Added: dynamic font loading for CJK (with auto-download fallback)
const ROOT = process.cwd();
const LOCAL_FONT_DIRS = [
  path.join(ROOT, 'src', 'assets', 'fonts'),
  path.join(ROOT, 'fonts')
];
const CJK_FONT_BASENAME = 'NotoSansSC-Regular.otf';
const CJK_FONT_CANDIDATES = [
  path.join(ROOT, 'src', 'assets', 'fonts', CJK_FONT_BASENAME),
  path.join(ROOT, 'src', 'assets', 'fonts', 'NotoSansSC-Regular.ttf'),
  path.join(ROOT, 'fonts', CJK_FONT_BASENAME),
  path.join(ROOT, 'fonts', 'NotoSansSC-Regular.ttf')
];
let CJK_FONT_PATH = CJK_FONT_CANDIDATES.find(p => fs.existsSync(p));

// Environment variable override
const ENV_FONT = process.env.SAT20_CJK_FONT && fs.existsSync(process.env.SAT20_CJK_FONT) ? process.env.SAT20_CJK_FONT : null;
if (ENV_FONT) CJK_FONT_PATH = ENV_FONT;

// Additional system font fallbacks (Windows typical)
if (!CJK_FONT_PATH && process.platform === 'win32') {
  const winFonts = [
    'C:/Windows/Fonts/msyh.ttc', // Microsoft YaHei
    'C:/Windows/Fonts/simhei.ttf',
    'C:/Windows/Fonts/simsun.ttc'
  ];
  const sys = winFonts.find(p => fs.existsSync(p));
  if (sys) CJK_FONT_PATH = sys;
}

// Remote sources (Open Font License). First that succeeds is used.
const CJK_FONT_DOWNLOAD_SOURCES = [
  'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/OTF/SimplifiedChinese/NotoSansSC-Regular.otf',
  'https://github.com/notofonts/noto-cjk/raw/main/Sans/OTF/SimplifiedChinese/NotoSansSC-Regular.otf',
  'https://raw.githubusercontent.com/googlefonts/noto-cjk/main/Sans/OTF/SimplifiedChinese/NotoSansSC-Regular.otf',
  'https://github.com/googlefonts/noto-cjk/raw/main/Sans/OTF/SimplifiedChinese/NotoSansSC-Regular.otf',
  // Release asset mirrors (may change over time)
  'https://github.com/notofonts/noto-cjk/releases/latest/download/NotoSansSC-Regular.otf'
];

function hasCJK(str) { return /[\u3400-\u9FFF\uF900-\uFAFF]/.test(str); }

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // handle redirect
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error('HTTP ' + res.statusCode));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
    }).on('error', err => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function ensureCJKFont() {
  if (CJK_FONT_PATH) return CJK_FONT_PATH;
  if (process.env.SAT20_SKIP_FONT_DOWNLOAD) {
    console.warn('[build-whitepaper-pdf] CJK font not found and auto-download skipped (SAT20_SKIP_FONT_DOWNLOAD=1).');
    return undefined;
  }
  // Ensure a writable font dir exists
  let targetDir = LOCAL_FONT_DIRS.find(d => {
    try { fs.mkdirSync(d, { recursive: true }); return true; } catch { return false; }
  });
  if (!targetDir) {
    console.warn('[build-whitepaper-pdf] Unable to create fonts directory for auto-download.');
    return undefined;
  }
  const targetPath = path.join(targetDir, CJK_FONT_BASENAME);
  for (const url of CJK_FONT_DOWNLOAD_SOURCES) {
    try {
      console.log('[build-whitepaper-pdf] Downloading CJK font from', url);
      await downloadFile(url, targetPath);
      CJK_FONT_PATH = targetPath;
      console.log('[build-whitepaper-pdf] CJK font downloaded to', targetPath);
      return CJK_FONT_PATH;
    } catch (e) {
      console.warn('[build-whitepaper-pdf] Failed to download from', url, '-', e.message);
    }
  }
  console.warn('[build-whitepaper-pdf] All CJK font download attempts failed. Chinese text may be garbled.');
  return undefined;
}

function usage() {
  console.log('Usage: node scripts/build-whitepaper-pdf.js <input.md> <output.pdf> [--toc] [--cjk-wrap]');
}

const args = process.argv.slice(2);
let inFile, outFile;
let enableTOC = false;
let enableCJKWrap = false; // new flag
const positional = args.filter(a => !a.startsWith('--'));
[inFile, outFile] = positional;
if (args.includes('--toc')) enableTOC = true;
if (args.includes('--cjk-wrap')) enableCJKWrap = true;

if (!inFile || !outFile) {
  usage();
  process.exit(1);
}

if (!fs.existsSync(inFile)) {
  console.error('Input markdown not found:', inFile);
  process.exit(1);
}

const outDir = path.dirname(outFile);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const mdRaw = fs.readFileSync(inFile, 'utf-8');

// Very light front-matter strip
const content = mdRaw.replace(/^---[\s\S]*?---\n/, '');

// ---------------- New async wrapper ----------------
(async () => {
  if (!CJK_FONT_PATH) await ensureCJKFont();
  if (!CJK_FONT_PATH) console.warn('[build-whitepaper-pdf] Proceeding without CJK font (set SAT20_CJK_FONT=/path/to/font.otf to override).');

  const doc = new PDFDocument({ size: 'A4', margin: 56 });
  const writeStream = fs.createWriteStream(outFile);
  doc.pipe(writeStream);
  if (CJK_FONT_PATH) { 
    try { 
      doc.registerFont('CJK', CJK_FONT_PATH); 
      console.log('[build-whitepaper-pdf] Using CJK font:', CJK_FONT_PATH); 
    } catch (e) { 
      console.warn('Failed to register CJK font:', e.message); 
    } 
  } else { 
    console.warn('[build-whitepaper-pdf] CJK font not found. Place NotoSansSC-Regular.(otf|ttf) in src/assets/fonts/.'); 
  }

  const FONT_SIZE_BASE = 11, FONT_SIZE_H1 = 22, FONT_SIZE_H2 = 16, FONT_SIZE_H3 = 13;
  const LINE_GAP = 2; // added line gap for readability
  function pageTextWidth() { return doc.page.width - doc.page.margins.left - doc.page.margins.right; }
  function addSpacing(mult = 1) { doc.moveDown(mult); }
  function pickFont(text, { bold = false, mono = false, small = false } = {}) {
    const size = small ? 10 : FONT_SIZE_BASE;
    if (mono) { doc.font('Courier').fontSize(size); return; }
    if (hasCJK(text) && CJK_FONT_PATH) { doc.font('CJK').fontSize(size + (bold ? 1 : 0)); }
    else { doc.font(bold ? 'Helvetica-Bold' : 'Helvetica').fontSize(size); }
  }
  function wrapCJKIfNeeded(str) {
    if (!str) return str;
    if (!enableCJKWrap) return str; // only apply when flag is set
    const cjkChars = (str.match(/[\u3400-\u9FFF]/g) || []).length;
    const cjkRatio = cjkChars / str.length;
    // If mostly CJK or long CJK run without spaces, insert zero-width break points
    if ((cjkRatio > 0.6 && !/\s/.test(str)) || (cjkChars > 40 && !/\s/.test(str))) {
      return str.split('').join('\u200B');
    }
    return str;
  }

  // Tokenize markdown
  const tokens = marked.lexer(content, { gfm: true });
  const headings = [];

  // Optional TOC: collect headings first
  if (enableTOC) {
    for (const t of tokens) if (t.type === 'heading' && t.depth <= 3) headings.push({ depth: t.depth, text: t.text });
    if (headings.length) {
      pickFont('Table of Contents', { bold: true }); doc.fontSize(18).text('Table of Contents', { width: pageTextWidth(), lineGap: LINE_GAP }); addSpacing(0.5);
      headings.forEach(h => {
        const indent = (h.depth - 1) * 12;
        pickFont(h.text, {}); doc.text('- '.padStart(indent + 2, ' ') + wrapCJKIfNeeded(h.text), { width: pageTextWidth(), lineGap: LINE_GAP }); });
      addSpacing(1);
      doc.addPage();
    }
  }

  function renderInline(inlineTokens) {
    if (!inlineTokens) return;
    inlineTokens.forEach(it => {
      if (it.type === 'text') {
        pickFont(it.text, {});
        doc.text(wrapCJKIfNeeded(it.text), { continued: true, width: pageTextWidth(), lineGap: LINE_GAP });
      } else if (it.type === 'codespan') {
        pickFont(it.text, { mono: true });
        doc.text(it.text, { continued: true, width: pageTextWidth(), lineGap: LINE_GAP });
      } else if (it.type === 'strong') {
        pickFont(it.text, { bold: true });
        doc.text(wrapCJKIfNeeded(it.text), { continued: true, width: pageTextWidth(), lineGap: LINE_GAP });
      } else if (it.type === 'em') {
        pickFont(it.text, {}); // Could switch to oblique if desired
        doc.text(wrapCJKIfNeeded(it.text), { continued: true, width: pageTextWidth(), lineGap: LINE_GAP });
      } else if (it.type === 'link') {
        pickFont(it.text, {});
        doc.fillColor('blue').text(it.text, { link: it.href, underline: true, continued: true, width: pageTextWidth(), lineGap: LINE_GAP }).fillColor('black');
      } else if (it.type === 'escape') {
        pickFont(it.text, {});
        doc.text(it.text, { continued: true, width: pageTextWidth(), lineGap: LINE_GAP });
      } else if (it.type === 'html') {
        // skip raw html for now
      } else if (it.type === 'space') {
        doc.text(' ', { continued: true, width: pageTextWidth(), lineGap: LINE_GAP });
      } else {
        const raw = it.raw || it.text || '';
        pickFont(raw, {});
        doc.text(wrapCJKIfNeeded(raw), { continued: true, width: pageTextWidth(), lineGap: LINE_GAP });
      }
    });
    doc.text('', { width: pageTextWidth(), lineGap: LINE_GAP }); // end continued chain
  }

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    switch (t.type) {
      case 'space': break;
      case 'heading': {
        const txt = wrapCJKIfNeeded(t.text.trim());
        if (t.depth === 1) { addSpacing(0.8); pickFont(txt, { bold: true }); doc.fontSize(FONT_SIZE_H1).text(txt, { width: pageTextWidth(), lineGap: LINE_GAP }); addSpacing(0.3); }
        else if (t.depth === 2) { addSpacing(0.6); pickFont(txt, { bold: true }); doc.fontSize(FONT_SIZE_H2).text(txt, { width: pageTextWidth(), lineGap: LINE_GAP }); addSpacing(0.2); }
        else { addSpacing(0.5); pickFont(txt, { bold: true }); doc.fontSize(FONT_SIZE_H3).text(txt, { width: pageTextWidth(), lineGap: LINE_GAP }); addSpacing(0.15); }
        break; }
      case 'paragraph': { pickFont('', {}); renderInline(t.tokens || []); addSpacing(0.2); break; }
      case 'blockquote': {
        // Draw vertical bar
        const startY = doc.y;
        const innerTokens = t.tokens.filter(bt => bt.type === 'paragraph');
        doc.save();
        const barX = doc.x - 8;
        const preY = doc.y;
        doc.lineWidth(3).strokeColor('#cccccc').moveTo(barX, preY).lineTo(barX, preY + 4).stroke();
        doc.fillColor('#555');
        innerTokens.forEach((bt, idx) => { pickFont('', { small: true }); renderInline(bt.tokens); if (idx < innerTokens.length - 1) addSpacing(0.1); });
        doc.restore(); addSpacing(0.2); break; }
      case 'list': {
        t.items.forEach((item, idx) => {
          const bullet = t.ordered ? (item.index || idx + 1) + '.' : '•';
          pickFont(bullet, {}); doc.text(bullet + ' ', { continued: true, width: pageTextWidth(), lineGap: LINE_GAP });
          renderInline(item.tokens || []); addSpacing(0.05);
        }); addSpacing(0.25); break; }
      case 'code': {
        addSpacing(0.2); pickFont('', { mono: true });
        const boxX = doc.x, boxY = doc.y; const code = t.text.replace(/\s+$/, '');
        const width = pageTextWidth();
        const padding = 6; const lines = code.split('\n');
        const lineHeight = 12; const boxHeight = lines.length * lineHeight + padding * 2;
        doc.save(); doc.roundedRect(boxX, boxY, width, boxHeight, 4).fill('#f5f5f5'); doc.fillColor('#000'); doc.font('Courier').fontSize(10);
        let cursorY = boxY + padding; lines.forEach(l => { doc.text(l, boxX + padding, cursorY, { lineBreak: false }); cursorY += lineHeight; }); doc.restore();
        doc.y = boxY + boxHeight; addSpacing(0.3); break; }
      case 'hr': {
        addSpacing(0.3); const x = doc.x; const y = doc.y; const w = pageTextWidth(); doc.moveTo(x, y).lineTo(x + w, y).stroke('#ccc'); addSpacing(0.3); break; }
      default: break;
    }
  }

  doc.end();
  writeStream.on('finish', () => { console.log('[build-whitepaper-pdf] PDF written:', outFile); if (!CJK_FONT_PATH) console.log('NOTE: Chinese glyphs may be garbled without a proper CJK font.'); });
  writeStream.on('error', (err) => { console.error('Error writing PDF:', err); process.exit(1); });
})();

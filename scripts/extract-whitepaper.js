#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
// Bypass pdf-parse debug wrapper (index.js triggers test file read when module.parent is undefined in ESM)
import pdfParse from 'pdf-parse/lib/pdf-parse.js';

const ROOT = path.resolve(process.cwd());
const INPUT_PDF = path.join(ROOT, 'public', 'documents', 'whitepaper', 'sat20_whitepaper_zh.pdf');
const OUT_DIR = path.join(ROOT, 'whitepaper_build');

if (!fs.existsSync(INPUT_PDF)) {
  console.error('[extract-whitepaper] PDF not found:', INPUT_PDF);
  process.exit(1);
}
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function normalizeText(raw) {
  let text = raw.replace(/\r\n?/g, '\n');
  text = text.split('\n')
    .map(l => l.replace(/\s+$/,'').trim())
    .filter(l => l.length)
    .filter(l => !/^[-–—]?\s*\d+\\s*[-–—]?$/.test(l))
    .join('\n');
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

function splitSections(text) {
  const lines = text.split('\n');
  const sections = [];
  let current = { heading: '前言', content: [] };
  const headingRegex = /^(第[一二三四五六七八九十零百千]+章[^\n]*|\d+(?:\.\d+)*\s+.+)/;
  for (const line of lines) {
    if (headingRegex.test(line.trim())) {
      if (current.content.length) sections.push({ heading: current.heading, content: current.content.join('\n').trim() });
      current = { heading: line.trim(), content: [] };
    } else {
      current.content.push(line);
    }
  }
  if (current.content.length) sections.push({ heading: current.heading, content: current.content.join('\n').trim() });
  return sections.map((s, idx) => ({ id: idx + 1, ...s }));
}

async function extractWithPdfParse(filePath) {
  console.log('[extract-whitepaper] Using pdf-parse');
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  if (!data || !data.text) throw new Error('No text extracted');
  return data.text;
}

(async () => {
  try {
    console.log('[extract-whitepaper] Reading:', INPUT_PDF);
    const raw = await extractWithPdfParse(INPUT_PDF);
    console.log('[extract-whitepaper] Raw length:', raw.length);
    const normalized = normalizeText(raw);
    fs.writeFileSync(path.join(OUT_DIR, 'whitepaper_zh.txt'), normalized, 'utf-8');
    console.log('[extract-whitepaper] Wrote whitepaper_zh.txt');
    const sections = splitSections(normalized);
    fs.writeFileSync(path.join(OUT_DIR, 'whitepaper_sections_zh.json'), JSON.stringify(sections, null, 2), 'utf-8');
    console.log('[extract-whitepaper] Wrote whitepaper_sections_zh.json (sections:', sections.length, ')');
    const md = sections.map(s => `# ${s.heading}\n\n${s.content}\n`).join('\n');
    fs.writeFileSync(path.join(OUT_DIR, 'whitepaper_zh.md'), md, 'utf-8');
    console.log('[extract-whitepaper] Wrote whitepaper_zh.md');
    console.log('\nDone. Next: npm run gen:whitepaper:en');
  } catch (err) {
    console.error('[extract-whitepaper] Failed:', err.message);
    console.error(err);
    process.exit(1);
  }
})();

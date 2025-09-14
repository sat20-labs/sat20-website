#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { Document, Packer, Paragraph, HeadingLevel, TextRun, AlignmentType, TableOfContents } from 'docx';

function usage() {
  console.log('Usage: node scripts/build-whitepaper-docx.js <input.md> <output.docx> [--toc]');
}

const args = process.argv.slice(2);
const positional = args.filter(a => !a.startsWith('--'));
const [inFile, outFile] = positional;
const enableTOC = args.includes('--toc');

if (!inFile || !outFile) { usage(); process.exit(1); }
if (!fs.existsSync(inFile)) { console.error('Input markdown not found:', inFile); process.exit(1); }

const mdRaw = fs.readFileSync(inFile, 'utf-8');
const content = mdRaw.replace(/^---[\s\S]*?---\n/, '');
const tokens = marked.lexer(content, { gfm: true });

const paragraphs = [];

// Optional TOC placeholder (Word will populate on open after right-click update field)
if (enableTOC) {
  paragraphs.push(new Paragraph({ text: 'Table of Contents', heading: HeadingLevel.HEADING_1 }));
  paragraphs.push(new Paragraph(' '));
  paragraphs.push(new Paragraph({ children: [new TextRun({ text: 'The TOC below can be updated in Word: right click -> Update Field', italics: true, size: 20 })] }));
  paragraphs.push(new Paragraph(' '));
  paragraphs.push(new Paragraph({ children: [], }));
  paragraphs.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
  paragraphs.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
  paragraphs.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
  paragraphs.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
  paragraphs.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
  // Real TOC field
  paragraphs.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
}

function pushHeading(text, depth) {
  const clean = text.trim();
  const map = { 1: HeadingLevel.HEADING_1, 2: HeadingLevel.HEADING_2, 3: HeadingLevel.HEADING_3, 4: HeadingLevel.HEADING_4, 5: HeadingLevel.HEADING_5, 6: HeadingLevel.HEADING_6 };
  paragraphs.push(new Paragraph({ text: clean, heading: map[depth] || HeadingLevel.HEADING_6 }));
}

function pushParagraphFromTokens(inlineTokens) {
  if (!inlineTokens || !inlineTokens.length) return;
  const runs = [];
  inlineTokens.forEach(tok => {
    switch (tok.type) {
      case 'text':
        runs.push(new TextRun({ text: tok.text })); break;
      case 'strong':
        runs.push(new TextRun({ text: tok.text, bold: true })); break;
      case 'em':
        runs.push(new TextRun({ text: tok.text, italics: true })); break;
      case 'codespan':
        runs.push(new TextRun({ text: tok.text, font: { name: 'Consolas' }, highlight: 'lightGray' })); break;
      case 'link':
        runs.push(new TextRun({ text: tok.text, style: 'Hyperlink' })); break;
      default:
        if (tok.text) runs.push(new TextRun({ text: tok.text }));
    }
  });
  paragraphs.push(new Paragraph({ children: runs }));
}

function pushList(items, ordered) {
  items.forEach((item, idx) => {
    const runs = [];
    item.tokens && item.tokens.forEach(tok => {
      if (tok.type === 'text') runs.push(new TextRun(tok.text));
      else if (tok.type === 'strong') runs.push(new TextRun({ text: tok.text, bold: true }));
      else if (tok.type === 'em') runs.push(new TextRun({ text: tok.text, italics: true }));
      else if (tok.type === 'codespan') runs.push(new TextRun({ text: tok.text, font: { name: 'Consolas' } }));
      else if (tok.text) runs.push(new TextRun(tok.text));
    });
    paragraphs.push(new Paragraph({ children: runs, numbering: { reference: ordered ? 'numbered-list' : 'bulleted-list', level: 0 } }));
  });
}

function pushCodeBlock(code, lang) {
  const lines = code.replace(/\s+$/, '').split('\n');
  lines.forEach(l => {
    paragraphs.push(new Paragraph({ children: [new TextRun({ text: l || ' ', font: { name: 'Consolas' } })], shading: { fill: 'EEEEEE', type: 'clear', color: 'auto' } }));
  });
  paragraphs.push(new Paragraph(' '));
}

function pushBlockQuote(blockTokens) {
  blockTokens.forEach(bt => {
    if (bt.type === 'paragraph') {
      const runs = [];
      (bt.tokens || []).forEach(tok => {
        if (tok.type === 'text') runs.push(new TextRun({ text: tok.text }));
        else if (tok.type === 'strong') runs.push(new TextRun({ text: tok.text, bold: true }));
        else if (tok.type === 'em') runs.push(new TextRun({ text: tok.text, italics: true }));
        else if (tok.type === 'codespan') runs.push(new TextRun({ text: tok.text, font: { name: 'Consolas' } }));
      });
      paragraphs.push(new Paragraph({ children: runs, indent: { left: 720 }, border: { left: { color: '999999', size: 6, space: 24 } } }));
    }
  });
}

for (let i = 0; i < tokens.length; i++) {
  const t = tokens[i];
  switch (t.type) {
    case 'heading': pushHeading(t.text, t.depth); break;
    case 'paragraph': pushParagraphFromTokens(t.tokens); break;
    case 'list': pushList(t.items, t.ordered); break;
    case 'code': pushCodeBlock(t.text, t.lang); break;
    case 'blockquote': pushBlockQuote(t.tokens); break;
    case 'hr': paragraphs.push(new Paragraph({ children: [new TextRun({ text: '—'.repeat(20), color: '999999' })], alignment: AlignmentType.CENTER })); break;
    default: break;
  }
}

const doc = new Document({
  styles: {
    paragraphStyles: [
      { id: 'Normal', name: 'Normal', run: { font: 'Calibri', size: 22, eastAsia: 'Microsoft YaHei' }, paragraph: { spacing: { after: 120 } } },
      { id: 'Hyperlink', name: 'Hyperlink', basedOn: 'Normal', run: { color: '0000FF', underline: {} } }
    ],
    default: { document: { run: { font: 'Calibri', eastAsia: 'Microsoft YaHei' } } }
  },
  numbering: {
    config: [
      { reference: 'bulleted-list', levels: [{ level: 0, format: 'bullet', text: '•', alignment: AlignmentType.LEFT }] },
      { reference: 'numbered-list', levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.LEFT }] }
    ]
  },
  sections: [
    { children: paragraphs }
  ]
});

const outDir = path.dirname(outFile);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(outFile, buf);
  console.log('[build-whitepaper-docx] DOCX written:', outFile);
  console.log('Open in Word and (if TOC enabled) update the Table of Contents fields.');
}).catch(err => { console.error('Error generating DOCX:', err); process.exit(1); });

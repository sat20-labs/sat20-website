#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd());
const BUILD_DIR = path.join(ROOT, 'whitepaper_build');
const SECTIONS_FILE = path.join(BUILD_DIR, 'whitepaper_sections_zh.json');

if (!fs.existsSync(SECTIONS_FILE)) {
  console.error('[gen-whitepaper-en] Missing sections file. Run: npm run extract:whitepaper');
  process.exit(1);
}

const sections = JSON.parse(fs.readFileSync(SECTIONS_FILE, 'utf-8'));

// Basic seed glossary (extend manually later)
const glossary = [
  ['协议', 'Protocol'],
  ['网络', 'Network'],
  ['节点', 'Node'],
  ['共识机制', 'Consensus Mechanism'],
  ['代币', 'Token'],
  ['令牌经济', 'Tokenomics'],
  ['生态系统', 'Ecosystem'],
  ['跨链', 'Cross-chain'],
  ['安全', 'Security'],
  ['扩展性', 'Scalability'],
  ['智能合约', 'Smart Contract'],
  ['治理', 'Governance'],
];

function headingToEnglish(h) {
  // Very naive automatic heading mapping; user should refine.
  return h
    .replace(/第[一二三四五六七八九十零百千]+章\s*/g, '')
    .replace(/概述/g, 'Overview')
    .replace(/前言/g, 'Preface')
    .replace(/简介/g, 'Introduction')
    .replace(/技术/g, 'Technology')
    .replace(/架构/g, 'Architecture')
    .replace(/经济模型|经济机制/g, 'Tokenomics')
    .replace(/路线图/g, 'Roadmap')
    .replace(/结论/g, 'Conclusion');
}

const now = new Date().toISOString();

const mdParts = [];
mdParts.push('---');
mdParts.push('title: SAT20 Whitepaper (English Draft)');
mdParts.push('generated: ' + now);
mdParts.push('note: Auto-generated skeleton; fill translations.');
mdParts.push('---\n');

sections.forEach(sec => {
  const enHeading = headingToEnglish(sec.heading) || sec.heading;
  mdParts.push(`# ${enHeading}`);
  mdParts.push('');
  mdParts.push('> Original (ZH): ' + sec.heading); 
  mdParts.push('');
  // Placeholder paragraphs split by double newlines in Chinese
  const paragraphs = sec.content.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
  paragraphs.forEach((p, idx) => {
    mdParts.push(`<!-- zh:${idx+1} -->`);
    mdParts.push('> ' + p.replace(/</g, '&lt;'));
    mdParts.push('');
    mdParts.push('TODO: Translate this paragraph.');
    mdParts.push('');
  });
});

const OUT_MD = path.join(BUILD_DIR, 'whitepaper_en_skeleton.md');
fs.writeFileSync(OUT_MD, mdParts.join('\n'), 'utf-8');
console.log('[gen-whitepaper-en] Wrote', OUT_MD);

// Also emit a JSON structure for programmatic translation
const bilingual = sections.map(sec => ({
  id: sec.id,
  heading_zh: sec.heading,
  heading_en: headingToEnglish(sec.heading) || '',
  paragraphs: sec.content.split(/\n{2,}/).map(p => ({ zh: p.trim(), en: '' }))
}));
const OUT_JSON = path.join(BUILD_DIR, 'whitepaper_bilingual.json');
fs.writeFileSync(OUT_JSON, JSON.stringify({ generated: now, glossary, sections: bilingual }, null, 2));
console.log('[gen-whitepaper-en] Wrote', OUT_JSON);

console.log('\nNext steps:');
console.log('1. Open whitepaper_build/whitepaper_en_skeleton.md and replace TODO lines with translations.');
console.log('2. Fill en fields in whitepaper_build/whitepaper_bilingual.json if doing programmatic translation.');
console.log('3. (Optional) Convert to PDF using pandoc after translation.');

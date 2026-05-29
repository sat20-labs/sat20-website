const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const source = path.resolve(process.env.SAT20_PWA_DIST || path.join(repoRoot, '..', 'sat20wallet', 'pwa', 'dist'));
const target = path.join(repoRoot, 'dist', 'pwa');

if (!fs.existsSync(path.join(source, 'index.html'))) {
  throw new Error(`PWA dist not found at ${source}. Run npm run build in sat20wallet/pwa first.`);
}

fs.rmSync(target, { recursive: true, force: true });
fs.mkdirSync(target, { recursive: true });
fs.cpSync(source, target, {
  recursive: true,
  force: true,
  filter: (entry) => path.basename(entry) !== '.DS_Store',
});

console.log(`Synced SAT20 Wallet PWA from ${source} to ${target}`);

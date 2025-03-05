// purgecss.config.cjs
const path = require('path');
const { fileURLToPath } = require('url');

// 转换Windows路径为文件URL
const toFileURL = (p) => 'file:///' + path.resolve(p).replace(/\\/g, '/');

module.exports = {
  content: [
    toFileURL('./src/**/*.vue'),
    toFileURL('./src/**/*.js')
  ],
  css: [toFileURL('./src/**/*.css')],
  output: toFileURL('./css-stats'),
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}
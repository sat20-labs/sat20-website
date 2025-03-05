// scripts/css-coverage.cjs
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const scss = require('postcss-scss');
const { parse } = require('@vue/compiler-sfc');

async function analyzeStyles(vueFile) {
  const vueContent = fs.readFileSync(vueFile, 'utf8');
  const parsed = parse(vueContent);
  
  if (parsed.descriptor.styles.length === 0) {
    console.log('组件无样式块');
    return;
  }

  console.log('\n样式块分析:');
  const cssUsage = new Set();
  const processor = postcss();
  
  for (const style of parsed.descriptor.styles) {
    console.log(`\n[样式块]`);
    console.log(`类型: ${style.lang || 'css'}`);
    console.log(`作用域: ${style.scoped ? 'scoped' : 'global'}`);
    console.log(`行号: ${style.loc.start.line}-${style.loc.end.line}`);
    
    try {
      const result = await processor.process(style.content, { 
        from: undefined,
        syntax: scss 
      });
      
      result.root.walkRules(rule => {
        cssUsage.add(rule.selector);
      });
    } catch (error) {
      console.error('处理样式时出错:', error.message);
    }
  }

  console.log('\nCSS覆盖率报告:');
  console.log(`文件: ${path.basename(vueFile)}`);
  console.log(`总规则数: ${cssUsage.size}`);
  console.log('\n选择器列表:');
  Array.from(cssUsage).forEach(selector => {
    console.log(`- ${selector}`);
  });
}

const componentPath = process.argv
  .find(arg => arg.startsWith('--component='))
  .split('=')[1];

const vueFile = path.resolve(process.cwd(), componentPath);
analyzeStyles(vueFile).catch(console.error);
const { run } = require('npm-check-updates');

(async () => {
  await run({
    upgrade: true,
    target: 'minor'
  });
})();

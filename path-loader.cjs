// path-loader.cjs
const { pathToFileURL } = require('url');

exports.resolve = function(specifier, context, defaultResolve) {
  if (specifier.startsWith('d:')) {
    return {
      url: pathToFileURL(specifier).href
    };
  }
  return defaultResolve(specifier, context, defaultResolve);
};
const { generateConfig } = require('./build-mf');

module.exports = [
  generateConfig('sample', true),
  generateConfig('sample', false),
  generateConfig('sample2', true),
  generateConfig('sample2', false),
  generateConfig('fc-button', true),
  generateConfig('fc-button', false),
  generateConfig('core-module', true),
  generateConfig('core-module', false),
  generateConfig('page-home', true),
  generateConfig('page-home', false),
  generateConfig('page-foo', true),
  generateConfig('page-foo', false),
]

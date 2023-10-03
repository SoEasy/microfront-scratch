const { generateConfig } = require('./build-mf');

module.exports = [
  generateConfig('sample', true),
  generateConfig('sample', false),
  generateConfig('sample2', true),
  generateConfig('sample2', false),
  generateConfig('fc-button', true),
  generateConfig('fc-button', false),
]

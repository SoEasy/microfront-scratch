const { generateConfig } = require('./build-mf');

module.exports = [
  generateConfig('sample', true),
  generateConfig('sample', false),
]

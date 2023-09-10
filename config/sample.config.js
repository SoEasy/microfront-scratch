const {resolve} = require('path');

function resolvePath(...args) {
  return resolve(process.cwd(), ...args)
}

function generateConfig(dirName) {
  const projectPath = resolvePath(dirName);

  return {
    mode: 'production',
    entry: {
      index: resolvePath(dirName, 'index.jsx'),
    },
    output: {
      clean: true,
      path: resolvePath('public', dirName),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules', projectPath]
    },
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: projectPath,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-react',
                    {
                      runtime: 'automatic'
                    }
                  ]
                ]
              }
            }
          ]
        },
      ]
    }
  };
}

module.exports = [
  generateConfig('sample'),
];

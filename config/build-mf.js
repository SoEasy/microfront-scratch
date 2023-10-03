const {resolve} = require('path');

function resolvePath(...args) {
  return resolve(process.cwd(), ...args)
}

function generateConfig(mfName, esm = false) {
  const projectPath = resolvePath();

  return {
    mode: 'production',
    entry: {
      index: resolvePath(mfName, 'index.jsx'),
    },
    output: {
      clean: true,
      path: resolvePath('public', mfName),
      filename: esm ? '[name].esm.js' : '[name].assign.js',
      library: esm ? {
        type: 'module'
      } : {
        type: 'assign',
        name: `window.ourMfExports["${mfName}"]`
      },
      uniqueName: mfName
    },
    externals: {
      'react': 'promise window.getDependency("react")',
      'react-router': 'promise window.getDependency("react-router")',
      'react-router-dom': 'promise window.getDependency("react-router-dom")',
    },
    experiments: esm ?{
      outputModule: true
    } : {},
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules', projectPath]
    },
    optimization: {
      minimize: false,
      runtimeChunk: !esm
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

module.exports = { generateConfig };

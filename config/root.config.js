const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolvePath(...args) {
  return resolve(process.cwd(), ...args)
}

const projectPath = resolvePath('root');

module.exports = {
  mode: 'development',
  entry: {
    root: resolvePath('root', 'index.jsx'),
  },
  output: {
    path: resolvePath('build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', projectPath]
  },
  devServer: {
    historyApiFallback: true,
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    })
  ]
}

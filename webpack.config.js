const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = !process.env.NODE_ENV
const libName = 'stop'

module.exports = {
  entry: {
    [libName]: isDev
      ? ['babel-polyfill', './dev/client']
      : ['./src'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  plugins: isDev ? [
    new HtmlWebpackPlugin()
  ] : [],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },

  externals: isDev ? {} : {
    setimmediate: {
      root: 'setImmediate',
      commonjs: 'setimmediate',
      commonjs2: 'setimmediate',
      amd: 'setimmediate',
    }
  },

  watch: isDev ,

  devtool: isDev ? 'eval' : ''
}

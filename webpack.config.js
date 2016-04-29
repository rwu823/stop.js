const webpack = require('webpack')

const isDev = process.env.NODE_ENV !== 'production'
const libName = 'stop'

module.exports = {
  entry: {
    [libName]: isDev
      ? ['babel-polyfill', './dev/client.js']
      : ['./src/index.js'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: '',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      }
    ]
  },
  externals: {
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

const merge = require('webpack-merge')
const path = require('path');

const commonConfig = require('./webpack.common.config')

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }]
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
  }
}

module.exports = merge({
  customizeArray(a, b, key) {
    // entry.app不合并，全部替换
    if (key === 'entry.app') {
      return b;
    }
    return undefined
  }
})(commonConfig, devConfig)

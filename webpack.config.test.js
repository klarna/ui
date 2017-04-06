'use strict'
var path = require('path')
var devServerPort = 3808
var devServerHostname = '127.0.0.1'

module.exports = {
  output: {
    filename: 'test.build.js',
    path: 'tests/',
    publicPath: 'http://' + devServerHostname + ':' + devServerPort + '/tests'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
    modules: [
      path.resolve('./'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|es6)$/,
        exclude: path.resolve('node_modules/'),
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.json$/,
        use: [
          { loader: 'json-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|eot|woff|ttf|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  devServer: {
    host: devServerHostname,
    port: devServerPort
  }
}

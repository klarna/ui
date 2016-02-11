'use strict'
var path = require('path')
var devServerPort = 3808
var devServerHostname = '127.0.0.1'

var config = {
  output: {
    filename: 'test.build.js',
    path: 'tests/',
    publicPath: 'http://' + devServerHostname + ':' + devServerPort + '/tests'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname)
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules,localIdentName=[local]',
          'autoprefixer',
          'sass'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|eot|woff|ttf|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'null'
      }
    ]
  },
  devServer: {
    host: devServerHostname,
    port: devServerPort
  }
}

module.exports = config

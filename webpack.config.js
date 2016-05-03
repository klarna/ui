var path = require('path')
var Webpack = require('webpack')
var WebpackHtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackErrorNotificationPlugin = require('webpack-error-notification')

module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: {
    example: './example/index'
  },
  output: {
    path: './',
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|es6)$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules,localIdentName=[local]',
          'sass'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules',
          'autoprefixer'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|eot|woff|ttf|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'file'
      }

    ]
  },
  plugins: [
    new WebpackErrorNotificationPlugin(),
    new Webpack.NoErrorsPlugin(),
    new WebpackHtmlWebpackPlugin({
      title: 'UI React components example',
      template: 'example/index.html'
    })
  ],
  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')]
  },
  resolve: {
    fallback: [path.join(__dirname, 'node_modules')],
    modulesDirectories: [
      './node_modules'
    ],
    root: path.join(__dirname),
    extensions: ['', '.js', '.jsx', '.es6']
  }
}

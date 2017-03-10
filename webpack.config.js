var path = require('path')
var autoprefixer = require('autoprefixer')
var Webpack = require('webpack')
var WebpackHtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackErrorNotificationPlugin = require('webpack-error-notification')

module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: {
    example: './example',
    index: './index',
    'responsive-example': './responsive-example'
  },
  output: {
    path: './',
    filename: '[name]-built.js',
    chunkFilename: '[id].js',
    publicPath: '/ui/',
    library: 'kui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.(jsx?|es6)$/,
        loader: 'babel',
        exclude: [/node_modules/]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules,localIdentName=[local]-[hash:base64:5]',
          'postcss',
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
      favicon: './favicon.ico',
      title: 'Klarna UI components',
      chunk: ['example'],
      template: 'example.html'
    }),
    new WebpackHtmlWebpackPlugin({
      // favicon: './favicon.ico',
      // inject: false,
      title: 'Klarna UI components',
      chunk: ['responsive-example'],
      template: 'responsive-example.html',
      filename: 'responsive-example.html'
    }),
    new Webpack.DefinePlugin({
      'process.env.REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD': true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    root: path.join(__dirname),
    exclude: /node_modules/,
    extensions: ['', '.js', '.jsx', '.es6']
  },
  postcss: () => [autoprefixer]
}

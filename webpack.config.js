var path = require('path')
var Webpack = require('webpack')
var WebpackHtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackErrorNotificationPlugin = require('webpack-error-notification')

module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: {
    example: './html/example',
    customizations: './html/customizations'
  },
  output: {
    path: './',
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/ui/'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx?|es6)$/,
        loader: 'babel',
        exclude: [/node_modules/]
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
      favicon: './favicon.ico',
      title: 'Klarna UI components',
      filename: 'index.html',
      template: 'html/example.html',
      chunks: ['example']
    }),
    new WebpackHtmlWebpackPlugin({
      favicon: './favicon.ico',
      filename: 'customizations.html',
      template: 'html/customizations.html',
      title: 'Klarna UI components',
      chunks: ['customizations']
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
  }
}

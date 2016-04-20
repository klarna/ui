var path = require('path')
var Webpack = require('webpack')
var WebpackCleanPlugin = require('clean-webpack-plugin')
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
    path: './build/',
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
        loader: 'file' // Could use url loader for inline serialisation
        // loader: 'url?limit=25000' // please be careful when changing this value. Some CSS may rely on this!
      }

    ]
  },
  plugins: [
    new WebpackErrorNotificationPlugin(),
    new Webpack.NoErrorsPlugin(),
    new WebpackCleanPlugin(['build/*']),
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

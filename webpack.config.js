var Webpack = require('webpack')
var WebpackCleanPlugin = require('clean-webpack-plugin')
var WebpackHtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

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
        test: /\.jsx$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules',
          'autoprefixer',
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
    new Webpack.NoErrorsPlugin(),
    new WebpackCleanPlugin(['build/*']),
    new WebpackHtmlWebpackPlugin({
      title: 'UI React components example',
      template: 'example/index.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'meta-react-components': path.resolve(__dirname, './')
    }
  }
}

const path = require('path')
const Webpack = require('webpack')
const WebpackHtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackErrorNotificationPlugin = require('webpack-error-notification')

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 7777,
    hot: true,
    historyApiFallback: true
  },
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:7777',
    'webpack/hot/only-dev-server',
    './example'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    pathinfo: true
  },
  resolve: {
    modules: [
      path.resolve('./'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.es6']
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
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'postcss-loader' }
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
  plugins: [
    new WebpackErrorNotificationPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
    // enable HMR globally
    new Webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new Webpack.NamedModulesPlugin(),
    new WebpackHtmlWebpackPlugin({
      template: './template.ejs',
      title: 'Klarna UI components',
      favicon: './favicon.ico'
    }),
    new Webpack.DefinePlugin({
      'process.env.REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD': true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new Webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    })
  ]
}

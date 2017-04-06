import path from 'path'
import Webpack from 'webpack'
import WebpackHtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackErrorNotificationPlugin from 'webpack-error-notification'

export default {
  cache: true,
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 7777,
    hot: true,
    historyApiFallback: true
  },
  entry: {
    example: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:7777',
      'webpack/hot/only-dev-server',
      './example'
    ],
    index: './index'
  },
  output: {
    path: path.resolve('./'),
    filename: '[name]-built.js',
    chunkFilename: '[id].js',
    publicPath: '/ui/',
    library: 'kui',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
    new Webpack.HotModuleReplacementPlugin(),
    new WebpackHtmlWebpackPlugin({
      favicon: './favicon.ico',
      title: 'Klarna UI components',
      template: 'example.html'
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

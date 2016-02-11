var webpackConfig = require('./webpack.config.test.js')
var argv = require('yargs').argv

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'tests/**/*.spec.*'
    ],
    exclude: [],
    preprocessors: {
      'tests/**/*': ['webpack']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: argv.watch,
    browsers: ['PhantomJS'],
    singleRun: !argv.watch,
    concurrency: Infinity
  })
}

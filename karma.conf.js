var webpackConfig = require('./webpack.config.test.js')
var argv = require('yargs').argv

var browserToUse = ['PhantomJS', 'SL_Chrome']
if (process.env.BROWSER) {
  browserToUse = process.env.BROWSER.split(',')
}

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
      resolve: webpackConfig.resolve,
      resolveLoader: webpackConfig.resolveLoader
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['spec', 'saucelabs'],
    port: 9890,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: argv.watch,

    sauceLabs: {
      testName: 'klarna-react-components'
    },
    captureTimeout: 120000,
    browserNoActivityTimeout: 1000000,

    customLaunchers: {
      SL_Chrome: {
        base: 'SauceLabs',
        browserName: 'chrome'
      }
    },

    browsers: browserToUse,
    singleRun: !argv.watch,
    concurrency: Infinity
  })
}

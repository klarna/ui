var webpackConfig = require('./webpack.config.test.js')
var argv = require('yargs').argv

var browserToUse = ['PhantomJS']
if (process.env.BROWSER) {
  browserToUse = process.env.BROWSER.split(',')
}

var karmaServer = 'localhost'
if (process.env.KARMA_SERVER) {
  karmaServer = process.env.KARMA_SERVER
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

    //hostname: karmaServer,
    sauceLabs: {
      testName: 'klarna-react-components'
    },
    captureTimeout: 120000,
    browserNoActivityTimeout: 1000000,

    customLaunchers: {
      sl_ios_safari: {
        base: 'SauceLabs',
        browserName: 'iphone',
        platform: 'OS X 10.9',
        version: '7.1'
      }
    },

    browsers: browserToUse,
    singleRun: !argv.watch,
    concurrency: Infinity
  })
}

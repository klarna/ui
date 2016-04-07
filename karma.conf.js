var webpackConfig = require('./webpack.config.test.js')
var argv = require('yargs').argv

var grid = {
  hostname: process.env.GRID_SERVER,
  port: 4444
}

var android = {
  hostname: process.env.APPIUM_SERVER,
  port: 9070
}

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
    reporters: ['spec'],
    port: 9890,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: argv.watch,

    hostname: karmaServer,
    browserNoActivityTimeout: 1000000,

    customLaunchers: {
      'WIN10-Chrome': {
        base: 'WebDriver',
        browserName: 'chrome',
        config: grid,
        platform: 'WIN10'
      },
      'WIN10-Firefox': {
        base: 'WebDriver',
        browserName: 'firefox',
        config: grid,
        platform: 'WIN10'
      },
      'WIN10-IE-EDGE': {
        base: 'WebDriver',
        browserName: 'internet explorer',
        config: grid,
        platform: 'WIN10'
      },
      'MAC-Firefox': {
        base: 'WebDriver',
        browserName: 'firefox',
        config: grid,
        platform: 'MAC'
      },
      'MAC-Chrome': {
        base: 'WebDriver',
        browserName: 'chrome',
        config: grid,
        platform: 'MAC'
      },
      'MAC-Safari': {
        base: 'WebDriver',
        browserName: 'safari',
        config: grid,
        platform: 'MAC'
      },
      'ANDROID-Chrome': {
        base: 'WebDriver',
        config: android,
        platformName: 'Android',
        deviceName: 'Galaxy S6 Edge',
        browserName: 'Chrome',
        version: '5.1.1',
        testName: 'Chris',
        tags: '[]'
      }
    },

    browsers: browserToUse,
    singleRun: !argv.watch,
    concurrency: Infinity
  })
}

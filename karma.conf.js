var webpackConfig = require('./webpack.config.test.js')
var argv = require('yargs').argv

var browserToUse = ['PhantomJS']
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

    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: argv.watch,

    sauceLabs: {
      public: 'public',
      testName: 'klarna-react-components'
    },

    captureTimeout: 120000,
    browserNoActivityTimeout: 1000000,

    customLaunchers: {
      SL_Chrome: {
        base: 'SauceLabs',
        browserName: 'chrome'
      },
      SL_MAC_SAFARI_9_0: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.11',
        version: '9.0'
      },
      SL_IE_8: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows XP',
        version: '8.0'
      },
      SL_IE_10: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8',
        version: '10.0'
      },
      SL_IE_11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11.0'
      },
      SL_IE_13: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '13.10586'
      },
      SL_Android_4_2: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '4.2'
      },
      SL_Android_4_3: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '4.3'
      },
      SL_Android_4_4: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '4.4'
      },
      SL_Android_5_0: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '5.0'
      },
      SL_Android_5_1: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '5.1'
      },
      SL_IOS_8_0: {
        base: 'SauceLabs',
        browserName: 'iPhone',
        platform: 'OS X 10.10',
        version: '8.0'
      },
      SL_IOS_8_1: {
        base: 'SauceLabs',
        browserName: 'iPhone',
        platform: 'OS X 10.10',
        version: '8.1'
      },
      SL_IOS_9_2: {
        base: 'SauceLabs',
        browserName: 'iPhone',
        platform: 'OS X 10.10',
        version: '9.2'
      }
    },

    browsers: browserToUse,
    singleRun: !argv.watch,
    concurrency: Infinity
  })
}

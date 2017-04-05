module.exports = {
  system: {
    plugins: {
      babel: true,
      react: {
        webpackConfig: './webpack.config.js',
        port: 7777,
        replaceRootUrl: true
      }
    }
  },
  screenshotsDir: './gemini/screenshots/',
  rootUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}

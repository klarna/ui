# Klarna UI React Components

[![Build Status](https://travis-ci.org/klarna/ui-react-components.svg)](https://travis-ci.org/klarna/ui-react-components)
[![Code Climate](https://codeclimate.com/github/klarna/ui-react-components/badges/gpa.svg)](https://codeclimate.com/github/klarna/ui-react-components)
[![npm version](https://img.shields.io/npm/v/@klarna/ui-react-components.svg?maxAge=2592000)](https://www.npmjs.com/package/@klarna/ui-react-components)

This library is a [React](https://facebook.github.io/react/) wrapper on top of [ui-css-components](https://github.com/klarna/ui-css-components).

## Install

```sh
npm instal @klarna/ui-react-components --save
```

This package doesn't have a build, so you must have a babel pipeline to use it. The minimal set of loaders is:

```javascript
test: /\.(jsx|es6)$/
loader: 'babel'
test: /\.scss$/,
loaders: [
  'style',
  'css?modules,localIdentName=[local]',
  'sass'
]

test: /\.(jpe?g|png|gif|svg|ico|eot|woff|ttf|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
loader: 'file' // or url
```

You can check more on the project's `webpack.config.js`.

## Run locally

> To run the project, NPM 3+ is required.

To run the showroom locally:

```sh
npm install
npm start
```

Open [localhost:7777](http://localhost:7777/).

## Using locally

Most of the time you'll want to change things in `ui-react-components` and see how they reflect in your project. To do that without having to push and publish versions, you need to create a global symlink from `ui-react-components` and then use this symlink in your project.

So first, create the global symlink by doing:

```sh
cd path/to/ui-react-components
npm link
```

Then go to your project and:

```
npm link @klarna/ui-react-components
UV_THREADPOOL_SIZE=100 npm start
```

This uses the global symlink of `ui-react-components` that points to our local git copy. Replace `npm start` with the command you use to start your app, if you use something different.

The `UV_THREADPOOL_SIZE=100` solves a problem you may encounter with symlinks when importing sass files [https://github.com/jtangelder/sass-loader/issues/100](https://github.com/jtangelder/sass-loader/issues/100).

### Running the tests in PhantomJS locally

```sh
npm test
```

## Running the tests on different Browsers

### Prerequisites

First install the required npm packages.
```sh
npm install karma-chrome-launcher
npm install karma-firefox-launcher
npm install karma-ie-launcher
npm install karma-safari-launcher
npm install karma-webdriver-launcher
```

### Run the tests on OSX
```sh
BROWSER=PhantomJS,Chrome,Safari,Firefox npm test
```

### Run the tests on WIN
```sh
BROWSER=PhantomJS,Chrome,Firefox npm test
```

## License

Please check the [LICENSE](LICENSE) file.


## Contributing

Make sure...

1. ...your contribution is aligned with the styleguide.
2. ...your contribution doesn't break the grid. To avoid that use always the `$grid` variable to define your sizes, as in `line-height: ($grid * 4)`. As a rule of thumb, if your element total height (sum of content, paddings, margins, etc...) has an integer multiple of `$grid` you should be good.
3. ... your code is linted: `npm run lint`.
4. ... it works in the major browsers, the simplest way is to spawn [ngrok](https://ngrok.com/) and use the cloud service of your choice. Else, you can download IE virtual machines for virtualbox using `curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | env IEVMS_VERSIONS="9" bash`.

Then:

1. Send a PR to Github.
2. Once approved:
	1. Update the version using `npm version` (tag will have `v` prefix) & update `CHANGELOG.md`.
	2. Merge to master and push (with the new tag as well).

Travis will take care to publish your new version on npm.
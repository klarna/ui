# Klarna UI React Components

[![Build Status](https://travis-ci.org/klarna/ui-react-components.svg)](https://travis-ci.org/klarna/ui-react-components)
[![Code Climate](https://codeclimate.com/github/klarna/ui-react-components/badges/gpa.svg)](https://codeclimate.com/github/klarna/ui-react-components)
[![npm version](https://img.shields.io/npm/v/@klarna/ui-react-components.svg?maxAge=2592000)](https://www.npmjs.com/package/@klarna/ui-react-components)


This library is a [React](https://facebook.github.io/react/) wrapper on top of [ui-css-components](https://github.com/klarna/ui-css-components).

#### Running locally

> To run the project, NPM 3+ is required.

To run the showroom locally:

```sh
npm install
npm start
```

Open [localhost:7777](http://localhost:7777/).

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

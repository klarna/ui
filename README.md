# Klarna UI Components

[![Build Status](https://travis-ci.org/klarna/ui.svg?branch=master)](https://travis-ci.org/klarna/ui)
[![npm version](https://img.shields.io/npm/v/@klarna/ui.svg?maxAge=10000)](https://www.npmjs.com/package/@klarna/ui)

This library contains the basic set of components used by multiple front end projects across Klarna. It exposes [React](https://facebook.github.io/react/) API compatible components as well as CSS modules.

## Install

```sh
npm install @klarna/ui --save
```

You can use the UI components either with [React](https://facebook.github.io/react/) and [Preact](https://preactjs.com/). [Learn more in the docs](https://github.com/klarna/ui/wiki/Preact).

This project has several peer dependencies that it needs to work. Although they are no technically _peer_ dependencies, we need to treat them that way to ensure that Webpack does not bundle them twice in the final builds of the consumer projects.

Install all peer dependencies with:

```sh
npm install react react-motion html2react ramda --save
```

This package has a build, but usage of it is not recommended. You must have a Babel pipeline to use it. [Read more about how to config it](https://github.com/klarna/ui/wiki/Webpack-config).

## Wiki

There are plenty of articles in our wiki. [Check it out](https://github.com/klarna/ui/wiki)

## Run locally

> To run the project, NPM 3+ is required.

To run the showroom locally:

```sh
npm install
npm start
```

Open [localhost:7777/ui/](http://localhost:7777/ui/).

## Visual regression tests

Temporarily run Selenium Server + ChromeDriver locally until we set up SauceLabs or something:

```sh
npm run test:visual:setup
```

### Check

```sh
npm run test:visual
```

### Save new screenshots

```sh
npm run test:visual:add
```

### Update screenshots with diff

```sh
npm run test:visual:update
```

## License

Please check the [LICENSE](LICENSE) file.

## Contributing

Make sure:

1. Your contribution is aligned with the styleguide.
2. Your contribution doesn't break the grid. To avoid that, always use the `$grid` variable to define your sizes, as in `line-height: ($grid * 4)`. As a rule of thumb, if your element total height (sum of content, paddings, margins, etc.) has an integer multiple of `$grid` you should be good.
3. Your code is linted: `npm run lint`.
4. It works in the major browsers, the simplest way is to spawn [ngrok](https://ngrok.com/) and use the cloud service of your choice. Else, you can download IE virtual machines for VirtualBox using `curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | env IEVMS_VERSIONS="9" bash`.

Then:

1. Send a PR.
2. Once approved (with 👍 reaction or a _LGTM_ comment):
  1. Merge to master
  2. Pull master locally
  3. Update the version using `npm version <major|minor|patch> -m "Some message describing what happened"` (tag will have `v` prefix). The message will be published as the [release notes in Github](https://github.com/klarna/ui/releases).
  4. Push master and the new tag as well. (`git push origin master --follow-tags`)
  5. Go to https://github.com/klarna/ui/releases, click on "Draft a new release" and add notes for your release version. Make sure to enter the number of your release including the `v` in the "Tag version" field, ie. `v4.13.2`

Travis will take care of publishing your new version to npm. In a matter of minutes it should be ready. You can check the status of the release publication by reading the log of the build corresponding to your tag. The list of Travis builds can be found in https://travis-ci.org/klarna/ui/builds

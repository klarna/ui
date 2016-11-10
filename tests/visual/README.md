# Visual Tests

![alt text](http://galenframework.com/public/logo.png "Galen Logo")

## Introduction
We use [Galen Framework](http://galenframework.com/)  to perform Visual Testing. Galen is based on selenium and exposes an [SDL](http://galenframework.com/docs/reference-galen-spec-language-guide/) for visual testing.

## Installation
Follow [Galen Framework Installation Guide](http://galenframework.com/docs/getting-started-install-galen/)

## Project Structure
```
.
|-- specs: The actual testcases divided by project.
|-- suites: 'Specs by example like' test suites. They which specs will run on which devices. You care about kc_local.test mostly
|-- scripts: Shell scripts invoking the suites.
|-- galen.config: Global configuration for galen. Referenced by the scripts
|-- Makefile used by the docker container
|-- docker-compose.yml: Describes the galen docker image needed for running the tests. Depends on [kcoc-galen](https://stash.int.klarna.net/projects/KCOC/repos/kcoc-galen)
```

## Run

```sh
./scripts/run_suite.sh
```

## Docker

In klarna-credit-app directory level do:
```sh
docker-compose run -d -p 172.17.0.1:3000:3000 --rm node make start
docker run -d -p 172.17.0.1:4444:4444 --name hub -t hub.int.klarna.net/kcoc-selenium-standalone-chrome:2.50.0
```

Wait for a while since `make start` takes sometime to install npm packages and start sagui in the container.

In visual_tests directory do:
```sh
docker-compose run galen make run-suite-docker
open htmlreport-dir/report.html
```

## Tunnels for external Services

### Saucelabs
Download [SauceConnect](https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect)
Use the `-B all` flag to avoid certificate issues with Android >= 4.4

```sh
./sc-4.4.0-rc2-osx/bin/sc -u DouglasRunner -k dbda3111-02b0-4e4c-aef2-aed731558e12 -B all
```

### BrowserStack
Download [BrowserStackLocal](https://www.browserstack.com/local-testing)
```sh
./BrowserStackLocal PG7yKyuiKpQffpkuKGUp -enableLoggingForAPI -forcelocal -force -v
```
or for full verbose logs
```sh
./BrowserStackLocal PG7yKyuiKpQffpkuKGUp -enableLoggingForAPI -forcelocal -force -vvv
```

### Trouble shooting
On unix based systems there is a bug in chromedriver if you have Locale set to anything else than LANG=”en_US.UTF-8″ or LANG=”c″ see forum: 
https://bugs.chromium.org/p/chromedriver/issues/detail?id=1552

Uncheck "Set locale variable automaticly" in the profile for the terminal preferences if you Locale is set to a specific language of your choice.

You can chech the locale by typing "locale" in the terminal.
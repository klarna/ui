# Klarna UI React Components

This library is a [React](https://facebook.github.io/react/) wrapper on top of [ui-css-components](https://github.com/klarna/ui-css-components).

#### Running locally

To run the showroom locally:

```sh
npm install
npm start
```

Open [localhost:7777](http://localhost:7777/).


#### Running on different Browsers

## Prerequisites

First install the required npm packages.
```sh
npm install karma-chrome-launcher
npm install karma-firefox-launcher
npm install karma-ie-launcher
npm install karma-safari-launcher
npm install karma-webdriver-launcher
``` 

Then get the selenium servers and browser drivers from http://www.seleniumhq.org/download/

You will also need appium for the Android Browser. For that get and install appium from http://appium.io/

TODO: iOS

## Start the Server
```sh
java -jar selenium-server-standalone-2.51.0.jar -port 4444 -role hub
```

## Connect MAC
```sh
java -jar selenium-server-standalone-2.51.0.jar -Dwebdriver.chrome.driver=Applications/chromedriver -role node -hub http://<GRID_SERVER>:4444/grid/register -browser browserName=chrome -browser browserName=firefox -browser browserName=safari
```

## Connect Win
```sh
java -jar selenium-server-standalone-2.51.0.jar -Dwebdriver.ie.driver=IEDriverServer.exe -Dwebdriver.chrome.driver=chromedriver.exe -porrt 7777 -role node -hub http://<GRID_SERVER>:4444/grid/register -browser browserName=chrome -browser browserName=firefox -browser "browserName=internet explorer"
```

## Connect Android

For the moment spawn the appium server without connecting it to the grid. TODO: find solution
```sh
appium --command-timeout "7200" --debug-log-spacing --automation-name "Appium" --platform-name "Android" --platform-version "5.1" --app-activity "com.android.chrome" --device-name "Galaxy S6 Edge" -p 9070 -U 05157df5cb11590f
```

## Run the tests on the browsers
#Locally on your MAC
```sh
BROWSER=PhantomJS,Chrome,Safari,Firefox npm test
```

#Against Selenium Grid
```sh
APPIUM_SERVER=10.3.220.243 GRID_SERVER=127.0.0.1 KARMA_SERVER=10.3.220.243 BROWSER=MAC-Firefox,MAC-Safari,MAC-Chrome,WIN10-Firefox,WIN10-Chrome,WIN10-IE-EDGE,ANDROID-Chrome npm test
```


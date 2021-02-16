$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('groupactivity\hotel.feature');
formatter.feature({
  "line": 1,
  "name": "Hotel Operations",
  "description": "User login page shall takes place here",
  "id": "hotel-operations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Operation for users",
  "description": "",
  "id": "hotel-operations;operation-for-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@HotelTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user on the login form",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter valid data on the page",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 7
    },
    {
      "cells": [
        "Username",
        "laxmanbaskaran211"
      ],
      "line": 8
    },
    {
      "cells": [
        "password",
        "Laxman211"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user clicking the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the page is navigated to search hotel page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the user enter the data into the search page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user clicking the search button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "it shows the details of the hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelOperations.open_the_Browser_and_launch_the_application()"
});
formatter.result({
  "duration": 2359879200,
  "status": "passed"
});
formatter.match({
  "location": "HotelOperations.enter_valid_data(DataTable)"
});
formatter.result({
  "duration": 4301930000,
  "status": "passed"
});
formatter.match({
  "location": "HotelOperations.successful_login()"
});
formatter.result({
  "duration": 4869543600,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAVBCP1185\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\training\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51772}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: af0071f8b9343d027ee78d7023f3b23b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat groupactivity.HotelOperations.successful_login(HotelOperations.java:62)\r\n\tat ✽.When the user clicking the login button(groupactivity\\hotel.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HotelOperations.verify_the_page_is_navigated_to_search_hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelOperations.user_enter_data_into_search_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelOperations.user_clicking_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelOperations.shows_details_of_hotal()"
});
formatter.result({
  "status": "skipped"
});
});
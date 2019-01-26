# Overview
This is an example with WebdriverIO for Selenium testing in Node JS. It make use of Cucumber BDD framework. It is ES6 friendly (via babel-register).

# Setup
This project currently supports Node 10.15.0 and up. While earlier versions of node may be compatible, they have not been tested or verified.


1. Ensure you have the minimum required Java 8+

```
java -version
```

2. Install Selenium

```
npm install selenium-standalone@latest -g
selenium-standalone install
```

# Run tests
```
.\node_modules\.bin\wdio .\src\config\wdio.conf.js
.\node_modules\.bin\wdio .\src\config\wdio.conf.js --browser chrome
.\node_modules\.bin\wdio .\src\config\wdio.conf.js --browser firefox
```

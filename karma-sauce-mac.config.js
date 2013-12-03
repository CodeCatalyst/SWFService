// Karma configuration
// Generated on Mon Nov 25 2013 20:40:03 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/mocha-as-promised/mocha-as-promised.js',
      'node_modules/chai/chai.js',
      'node_modules/chai-as-promised/lib/chai-as-promised.js',
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/sinon-chai/lib/sinon-chai.js',
      
      'bower_components/jquery/jquery.js',
      'bower_components/swfobject/swfobject/swfobject.js',
      { pattern: 'bower_components/swfobject/swfobject/expressInstall.swf', included: false },
      
      'test/support/mocha.setup.js',
      'test/support/chai.setup.js',
      'test/support/swf.setup.js',
      'test/support/karma.setup.js',
      
      'dist/client/SWFService.js',
      
      { pattern: 'test/src/service/Test/bin/Test.swf', included: false },
      
      'test/src/client/js/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: [
      'progress',
      'saucelabs'
    ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Sauce Labs configuration
    sauceLabs: {
      testName: 'SWFService Unit Tests',
      tunnelIdentifier: process.env.TRAVIS_JOB_RUNNER,
      recordVideo: false,
      recordScreenshots: false
    },
    customLaunchers: {
      // Safari 5
      
      sl_safari5: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'Mac 10.6',
        version: "5"
      },
      
      // Safari 6
      
      sl_safari6: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'Mac 10.8',
        version: "6"
      },
    },

    browsers: [
      'sl_safari5',
      'sl_safari6'
    ],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 120000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};

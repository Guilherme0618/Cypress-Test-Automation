const { defineConfig } = require('cypress');

module.exports = defineConfig({

  e2e: {

    baseUrl: 'https://www.google.com',

    viewportWidth: 1366,
    viewportHeight: 768,

    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,

    chromeWebSecurity: false,

    retries: {
      runMode: 2,
      openMode: 0
    },

    video: true,

    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {

      on('before:browser:launch', (browser, launchOptions) => {

        if (browser.family === 'chromium') {

          launchOptions.args.push(
            '--disable-blink-features=AutomationControlled'
          );

          launchOptions.args.push(
            '--start-maximized'
          );

        }

        return launchOptions;
      });

    },

  },

});
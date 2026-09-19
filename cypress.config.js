const { allureCypress } = require("allure-cypress/reporter");
const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }))

      allureCypress(on, config, {
        resultsDir: "allure-results",
      });

      return config
    },
    baseUrl: "http://localhost:3000",
    // projectId: "ufpqxq",
    // screenshotOnRunFailure: true,
    video: true,
  },
})

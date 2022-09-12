/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

// Adding cucumber
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

// Telling which config file to run
const fs = require('fs-extra')
const path = require('path')

//For cleaning up the reports
const rm = require('rimraf')

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('./cypress/config/', `cypress.${file}.json`)
    return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push('--disable-gpu')
            launchOptions.args.push('--disable-software-rasterizer')
            return launchOptions
        }
    })

    //Allure report writer
    allureWriter(on, config)

    // Cucumber
    on('file:preprocessor', cucumber())
    {
        // This code is which Configuration Environment file to use
        // accept a configFile value or use development by default
        const file = config.env.configFile || 'test'
        return getConfigurationByFile(file)
    }
}

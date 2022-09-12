# Cypress Test Framework with BDD Cucumber

## Project Description:
1. Framework : Cypress
2. BDD: Cypress-Cucumber-Preprocessor
3. Jenkins Reporting: Allure

## Project Structure
- cypress/integration/: contains all the tests. e.g., BDD feature file & the step definition file
- cypress/config/cypress.*.json : defines baseUrl and other environment variables
- cypress/plugins : the 3rd party plugins support 
- cypress/support : defines some helper commands as well as global configuration
- cypress/PageObject : defines page object
- testResults: allure test results report

```
.
├── README.md
├── cypress
│   ├── PageObject
│   │   ├── BookRoomDetailPage.js
│   │   ├── BookingSuccessfulDialog.js
│   │   ├── HomePage.js
│   │   └── RoomSummaryPage.js
│   ├── config
│   │   └── cypress.test.json
│   ├── downloads
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   ├── BookRoom
│   │   │   └── BookRoom.js
│   │   └── BookRoom.feature
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── Helpers
│       │   └── Helpers.js
│       ├── commands.js
│       └── index.js
├── cypress.json
├── package-lock.json
└── package.json
```

## Install
`npm install`

## Running the tests

### Running in command line

```
npm run cy:open
npm run cy:run -- --spec **/BookRoom.feature
```

### How to run a single feature and generate allure test report
```
npm run singlefeature
npm run allure:report
```

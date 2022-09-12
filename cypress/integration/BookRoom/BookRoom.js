import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../PageObject/HomePage"
import RoomSummaryPage from "../../PageObject/RoomSummaryPage"
import BookRoomDetailPage from "../../PageObject/BookRoomDetailPage"
import BookingSuccessfulDialog from "../../PageObject/BookingSuccessfulDialog"
import Helpers from "../../support/Helpers/Helpers"

const homePage = new HomePage()
const roomSummaryPage = new RoomSummaryPage()
const bookRoomDetailPage = new BookRoomDetailPage()
const bookingSuccessfulDialog = new BookingSuccessfulDialog()
const helpers = new Helpers()

let currentDate = new Date()
let futureDate = new Date()

cy.faker = require('faker')

Given('I am on the home page', () => {
    cy.visit(Cypress.config('baseUrl'))
    homePage.getLetMeHackButton().should('exist')
})

When('I click Hack me button', () => {
    homePage.getLetMeHackButton().click()
})

Then('I am navigated to the book room page', () => {
    roomSummaryPage.hotelLogo().should('be.visible')
    roomSummaryPage.roomsTitle().should('be.visible')
})

And('I am not able to access the room', () => {
    roomSummaryPage.singleRoom().should('be.visible')
})

And('I do not see accessibility icon', () => {
    roomSummaryPage.getWheelchairIcon().should('not.be.visible')
})

Given('I am on the book room page', () => {
    cy.visit(Cypress.config('baseUrl'))
    homePage.getLetMeHackButton().should('exist')
    homePage.getLetMeHackButton().click()
})

And('I have chosen to book a room', () => {
    roomSummaryPage.getBookRoomButton().click({force: true})
})

And('I have chosen the date', () => {
    futureDate.setDate(currentDate.getDate() + 2)
    bookRoomDetailPage.selectTwoDaysFromToday()
})

And('I have filled my information', () => {
    let firstName = cy.faker.name.firstName()
    let lastName = cy.faker.name.lastName()
    let email = cy.faker.internet.email()
    let phoneNumber = cy.faker.phone.phoneNumber('04##########')
    bookRoomDetailPage.enterFirstName(firstName)
    bookRoomDetailPage.enterLastName(lastName)
    bookRoomDetailPage.enterEmail(email)
    bookRoomDetailPage.enterPhoneNumber(phoneNumber)
})

When('I submit', () => {
    bookRoomDetailPage.bookRoomButton().click()
})

Then('I see a booking successfully message', () => {
    bookingSuccessfulDialog.bookingSuccessfulDialogTitle().should('be.visible')
    bookingSuccessfulDialog.bookingSuccessfulConfirmation().should('be.visible')
})

And('I see the correct booking date', () => {
    cy.contains(`${helpers.formatDate(currentDate)} - ${helpers.formatDate(futureDate)}`).should('be.visible')
})

class BookRoomDetailPage {
    bookRoomButton() {
        return cy.get('button').contains('Book')
    }

    calendarView() {
        return cy.get('.rbc-month-view')
    }

    calendarTodayButton() {
        return cy.get('button').contains('Today')
    }

    calendarBackButton() {
        return cy.get('button').contains('Back')
    }

    firstnameField() {
        return cy.get('.room-firstname')
    }

    lastnameField() {
        return cy.get('.room-lastname')
    }

    emailAddressField() {
        return cy.get('.room-email')
    }

    phoneField() {
        return cy.get('.room-phone')
    }

    enterFirstName(firstName) {
        this.firstnameField().type(firstName)
    }

    enterLastName(lastName) {
        this.lastnameField().type(lastName)
    }

    enterEmail(email) {
        this.emailAddressField().type(email)
    }

    enterPhoneNumber(number) {
        this.phoneField().type(number)
    }

    selectDateRange(currentDate, futureDate) {
        let currentDay = currentDate.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
        let futureDay = futureDate.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
        cy.get('button').contains(currentDay - 1).trigger("mousemove", "center")
            .trigger("mousedown")
        cy.get('button').contains(currentDay)
            .trigger("mousemove", 'center', {force: true})
        cy.wait(500)
        cy.get('button').contains(futureDay).trigger("mousemove", {force: true})
        cy.wait(500)
        cy.get('button').contains(futureDay).trigger("mouseup", {force: true})
    }

    selectTwoDaysFromToday() {
        if (cy.get('.rbc-now').next().next() == null) {
            cy.get('button').contains('Next').click()
        }
        if (cy.get('.rbc-now').prev() == null) {
            cy.get('.rbc-now').children().trigger("mousemove", "center").trigger("mousedown")
        }
        cy.get('.rbc-now').prev().children().trigger("mousemove", "center").trigger("mousedown")
        cy.get('.rbc-now').children().trigger("mousemove", 'center', {force: true})
        cy.wait(500)
        cy.get('.rbc-now').next().next().children().trigger("mousemove", {force: true})
        cy.wait(500)
        cy.get('.rbc-now').next().next().children().trigger("mouseup", {force: true})
    }
}

export default BookRoomDetailPage

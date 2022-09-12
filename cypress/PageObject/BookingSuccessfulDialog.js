class BookingSuccessfulDialog {
    bookingSuccessfulDialogTitle() {
        return cy.contains('Booking Successful!')
    }

    bookingSuccessfulConfirmation() {
        return cy.contains('Congratulations! Your booking has been confirmed for:')
    }

    bookingConfirmationWithDate() {
        return cy.contains('')
    }
}

export default BookingSuccessfulDialog

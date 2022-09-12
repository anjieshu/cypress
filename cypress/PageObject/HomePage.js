class HomePage {

    getLetMeHackButton() {
        return cy.get('.btn').contains('Let me hack!')
    }
}

export default HomePage

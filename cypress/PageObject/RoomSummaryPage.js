class RoomSummaryPage {

    getBookRoomButton() {
        return cy.get('.btn').contains('Book this room').first()
    }

    getWheelchairIcon() {
        return cy.get('.wheelchair')
    }

    roomsTitle() {
        return cy.contains('Rooms')
    }

    roomList() {
        return cy.get('.row hotel-room-info')
    }

    singleRoom() {
        return cy.contains('single')
    }

    hotelLogo() {
        return cy.get('.hotel-logoUrl')
    }
}

export default RoomSummaryPage

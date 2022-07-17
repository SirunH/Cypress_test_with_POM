/// <reference types="cypress" />

class ReservationPage {
    getDestinationField() {
        return cy.get('[name="ss"]');
    }
    getCheckInDateField() {
        return cy.get('[data-testid="date-display-field-start"]');
    }
    getCheckOutDateField() {
        return cy.get('[data-testid="date-display-field-end"]');
    }
    getStayDate() {
        return cy.get('[data-testid="occupancy-config"]');
    }
    getFourStarBtn() {
        return cy.get('.f7d4209a37 > [data-filters-group="class"] > [data-filters-item="class:class=4"] > .efeda70352 > .bbdb949247')
    }
    getSearchButton() {
        return cy.get(':nth-child(6) > div > .fc63351294');
    }
    getStars() {
        return cy.get('[data-testid^="rating-"]');
    }
    getResultAdress() {
        return cy.get('[data-testid="address"]');
    }

    selectFourStarBtn() {
        this.getFourStarBtn().click()
        cy.wait(5000);
    }

    selectSearchButton() {
        this.getSearchButton().click();
    }

}

module.exports = new ReservationPage();
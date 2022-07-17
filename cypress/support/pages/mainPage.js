/// <reference types="cypress" />

class MainPage {
    getMainPageTitle() {
        return cy.title();
    }
    getMainPageUrl() {
        return cy.url();
    }

    navigate() {
        cy.visit("");
    }
}

module.exports = new MainPage();
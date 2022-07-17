/// <reference types="cypress" />

import constantData from "../data/constantData";
import dynamicData from "../data/dynamicData";

class HomePage {
    getPlaceField() {
        return cy.get('#ss');
    }
    getSelectedField() {
        return cy.get('.xp__fieldset');
    }
    getFirst() {
        return cy.get("[data-label ='Dilijan, Armenia']");
    }
    getDate(date) {
        return cy.get(`[data-date="${date}"]`)
    }
    getNumbOfAdultsBtn() {
        return cy.get('[data-adults-count=""]');
    }
    choosNumbOfAdults() {
        return cy.get('.sb-group__field-adults > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__add-button');

    }
    getSearchBtn() {
        return cy.get('.sb-searchbox__button')
    }
    getHomePageTitle() {
        return cy.title();
    }
    getHomePageUrl() {
        return cy.url();
    }

    getclickedNumberOfAdults() {
        return cy.get('.sb-group__field-adults > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__display');
    }

    typePlace() {
        this.getPlaceField().click();
        this.getPlaceField().type(constantData.placeToSearch)
        cy.wait(5000);
    }

    chooseFirst() {
        this.getFirst().click();
    }

    selectDates() {
        cy.wait(500);
        let dates = dynamicData.generateDates();
        dates.forEach(el => {
            this.getDate(el).click()
                .should('have.class', 'bui-calendar__date--selected');
        })
    }

    selectNumOfAdults() {
        this.getNumbOfAdultsBtn().click();
    }
    randomNumOfAdults() {
        for (let n = 2; n < 4; n++) {
            this.choosNumbOfAdults().click();
        }
    }

    selectSearchBtn() {
        this.getSearchBtn().click();
    }

}

module.exports = new HomePage();
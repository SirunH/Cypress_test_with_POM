/// <reference types="cypress" />

import mainPage from "../pages/mainPage";
import homePage from "../pages/homePage";
import reservationPage from "../pages/reservationPage";
import constantData from "../data/constantData";
import dynamicData from "../data/dynamicData";

class Assertions {
    verifyTheMainPage() {
        mainPage.getMainPageUrl().should('eq', constantData.mainPagePath)
        mainPage.getMainPageTitle().should('include', constantData.mainPageTitle)
    }

    verifySearchResults() {
        homePage.chooseFirst().should('include', constantData.selectedPlace)
    }

    verifyNumbOfAdults() {
        homePage.getclickedNumberOfAdults().should('not.eq', '2');


    }

    verifyTheHomePage() {
        homePage.getHomePageUrl().should('contain', constantData.homePagePath)
        homePage.getHomePageTitle().should('include', constantData.homePageTitle)
    }

    verifyDestinationField() {
        reservationPage.getDestinationField().should('have.value', constantData.placeToSearch)
    };

    verifyCheckInField() {
        reservationPage.getCheckInDateField().should('not.be.empty')
    };

    verifyCheckOutField() {
        reservationPage.getCheckOutDateField().should('not.be.empty')
    };

    verifyStayDateField() {
        reservationPage.getStayDate().should('not.be.empty')
    };

    verifySelectedStars() {
        reservationPage.selectFourStarBtn().should('be.cheked')
    };

    verifyDestination() {
        reservationPage.getResultAdress().each(el => {
            let txt = el.text();
            expect(txt).to.include(constantData.placeToSearch, )
        });
    }

    verifyTheStars() {
        reservationPage.getStars().each(el => {
            let stars = el.find("span");
            expect(stars).to.have.lengthOf(constantData.theNumberOfStars);

        })
    }

};

module.exports = new Assertions();
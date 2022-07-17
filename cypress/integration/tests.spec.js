/// <reference types="cypress" />

import mainPage from "../support/pages/mainPage";
import homePage from "../support/pages/homePage";
import reservationPage from "../support/pages/reservationPage";
import assertions from "../support/assertions/assertions";


describe('Reserving Hotel in Booking app', () => {
    before('Visiting Booking app', () => {
        mainPage.navigate()
        assertions.verifyTheMainPage()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
    it(' Reservation in Booking app ', () => {
        homePage.typePlace()
        homePage.chooseFirst()
        homePage.selectDates()
        homePage.selectNumOfAdults()
        homePage.randomNumOfAdults()
        assertions.verifyNumbOfAdults()
        homePage.selectSearchBtn()
        assertions.verifyTheHomePage()
        assertions.verifyDestinationField()
        assertions.verifyCheckInField()
        assertions.verifyCheckOutField()
        assertions.verifyStayDateField()
        reservationPage.selectFourStarBtn()
        reservationPage.selectSearchButton()
        assertions.verifyTheStars()
        assertions.verifyDestination() //one destination is Lermontovo, is it bug?

    })
})
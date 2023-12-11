/// <reference types="Cypress" />

var pageLocators = {
    inputUserName : '#username',
}

export default class BasePage {
    
    urlValidation(pageUrl) {
        cy.url().should('eq', pageUrl)
    }
}
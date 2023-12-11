/// <reference types="Cypress" />

import BasePage from "../pages/basePage"

var pageLocators = {
    inputUserName : '#username',
    inputPassword : '#password',
    btnSubmit : '#submit',
    divError : '#error',
    h1:'h1',
    messageSuccessful: '.post-content strong',
    btnLogout: '.wp-block-button a'
}

export default class LoginPage extends BasePage{
    getInputUserName() {
        return cy.get(pageLocators.inputUserName, {timeout:10000});
    }

    getInputPassword() {
        return cy.get(pageLocators.inputPassword, {timeout:10000});
    }

    getBtnSubmit() {
        return cy.get(pageLocators.btnSubmit, {timeout:10000});
    }

    getDivError() {
        return cy.get(pageLocators.divError, {timeout:10000});
    }

    getH1() {
        return cy.get(pageLocators.h1, {timeout:10000});
    }

    getMessageSuccessful() {
        return cy.get(pageLocators.messageSuccessful, {timeout:10000});
    }

    getBtnLogout() {
        return cy.get(pageLocators.btnLogout);
    }

    login(username, password) {
        this.getInputUserName().type(username);
        this.getInputPassword().type(password);
        this.getBtnSubmit().click();
    }

    btnLogoutValidation(text) {
        this.getBtnLogout().should("have.text", text)
    }

    errorLabelValidation() {
        this.getDivError().should("be.visible");
    }

    messageValidation(caseTest, message) {
        switch (caseTest) {
            case "successful":
                this.getMessageSuccessful().should('have.text', message);
                break;
            case "incorrectUsername":
                this.getDivError().should('have.text', message);
                break;
            case "incorrectPassword":
                this.getDivError().should('have.text', message);
                break;
            default:
                this.getDivError().should('have.text', "Error");
                cy.log("error");
                break;
        }
    }
}
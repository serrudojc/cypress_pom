import LoginPage from '../../pages/loginPage';
const loginPage = new LoginPage();
import loginCredentials from "../../fixtures/loginCredentials.json";

describe('Login tests', () => {
    
    beforeEach(() => {
        cy.visit('/');
    })
    it('Login successful', () => {
        loginPage.login(loginCredentials.username, loginCredentials.password);
        loginPage.messageValidation("successful", "Congratulations student. You successfully logged in!");
        loginPage.urlValidation('https://practicetestautomation.com/logged-in-successfully/');
        loginPage.btnLogoutValidation("Log out");
    })

    it('Login incorrect username', () => {
        loginPage.login(loginCredentials.incorrectUsername, loginCredentials.password);
        loginPage.errorLabelValidation();
        loginPage.messageValidation("incorrectUsername", "Your username is invalid!");
    })

    it('Login incorrect password', () => {
        loginPage.login(loginCredentials.username, loginCredentials.incorrectPassword);
        loginPage.errorLabelValidation();
        loginPage.messageValidation("incorrectPassword", "Your password is invalid!");
    })
})
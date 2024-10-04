import LoginPage from '../PO/pages/login.page.js';
import HomePage from '../PO/pages/home.page.js';


//see readme.md for description of tests cases

describe('Tests for Login page saucedemo.com', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
    });

    it('UC-1 Test Login form with empty credentials', async () => {
        await LoginPage.fillLogin('any_credentials', 'any_credentials');
        await LoginPage.clearFields();
        await LoginPage.loginButton.click()
        await expect(LoginPage.errorMessageContainer).toHaveText('Epic sadface: Username is required');
    });

    it('UC-2 Test Login form with missing password', async () => {
        await LoginPage.fillLogin('any_credentials', 'any_credentials');
        await LoginPage.passwordField.doubleClick();
        await browser.keys('Delete');
        await LoginPage.login('any credentials', '');
        await expect(LoginPage.errorMessageContainer).toHaveText('Epic sadface: Password is required');
    });

    //expect included in the method verifyLogin()
    it('UC-3 Test Login form with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await HomePage.verifyLogin();
    });
});
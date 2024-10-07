import LoginPage from '../PO/pages/login.page.js';
import homePage from '../PO/pages/home.page.js';


//see readme.md for description of tests cases

describe('Tests for Login page saucedemo.com', () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
    });

    describe('UC-1 Test Login form with empty credentials',() =>{
        it('Should show an error login with empty credentials', async () => {
            //Given
            await LoginPage.fillLogin('any_credentials', 'any_credentials');
            await LoginPage.clearFields();

            //when
            await LoginPage.loginButton.click()

            //Then
            await expect(LoginPage.errorMessageContainer).toHaveText('Epic sadface: Username is required');
        });
    }),
    
    describe('UC-2 Test Login form with missing password', () => {
        it('Should show an error if login missing the password', async () => {
            //Given
            await LoginPage.fillLogin('any_credentials', 'any_credentials');
            await LoginPage.passwordField.doubleClick();
            await browser.keys('Delete');

            //When
            await LoginPage.login('any credentials', '');

            //Then
            await expect(LoginPage.errorMessageContainer).toHaveText('Epic sadface: Password is required');
        });    
    }),

    describe('UC-3 Test Login form with valid credentials', () => {
        it('should Login with valid credentials and validate the home page header', async () => {
            //Given - When
            await LoginPage.login('standard_user', 'secret_sauce');

            //Then
            await expect(homePage.appLogo).toHaveText('Swag Labs')
        });
    })
});
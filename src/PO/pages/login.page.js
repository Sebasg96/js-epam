import { $ } from '@wdio/globals'


class LoginPage {
    // Define selectors for username, password, and login button
    get usernameField() {
        return $('//*[@id="user-name"]');
    }

    get passwordField() {
        return $('//*[@id="password"]');
    }

    get loginButton() {
        return $('//*[@id="login-button"]');
    }

    get errorMessageContainer() {
        return $('//*[@data-test="error"]');
    }

    // Method to fill login info without submiting 
    async fillLogin(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);  
    }

    //Method to try the login user + password and submit
    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    // Method to clear the fields clearValue() is not working propertly
    async clearFields() {
        //await this.usernameField.clearValue();
        await this.usernameField.doubleClick();
        await browser.keys('Delete');
        //await this.passwordField.clearValue();
        await this.passwordField.doubleClick();
        await browser.keys('Delete');
    }

    // Method to verify the error message text content
    async getErrorMessage() {
        return await this.errorMessageContainer.getText();
    }
}

module.exports = new LoginPage();
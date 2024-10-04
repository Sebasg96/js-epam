//class for the page obtained after login using correct credentials

class HomePage {
    // Define selector for app header to verify text
    get appLogo() {
        return $('//*[@class="app_logo"]');
    }

    // Method to verify the login was successful by checking for the presence of the app logo (text content)
    async verifyLogin() {
        await expect(this.appLogo).toBeDisplayed();
    }
}

module.exports = new HomePage();
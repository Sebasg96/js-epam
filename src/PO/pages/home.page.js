//class for the page obtained after login using correct credentials

class HomePage {
    // Define selector for app header to verify text
    get appLogo() {
        return $('//*[@class="app_logo"]');
    }

}

module.exports = new HomePage();
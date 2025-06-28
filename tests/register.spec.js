const { test, expect } = require('@playwright/test');

class AutomatedRegistration {
    constructor(page) {
        this.page = page;
    }

    async registerUser(fullName, email, password) {
        try {
            // Navigate to registration page
            await this.page.goto('https://www-develop.tradecopy.io/');
            
            // Click on register button (adjust the selector based on your page)
            await this.page.locator("//div[contains(text(),'Register')]").click();
            
            // Wait for the registration form to be visible
            await this.page.waitForSelector("//input[@id='fullName']");
            
            // Fill in the registration form
            await this.page.locator("//input[@id='fullName']").fill(fullName);
            await this.page.locator("//input[@id='email']").fill(email);
            await this.page.locator("//input[@id='password']").fill(password);
            await this.page.locator("//input[@id='confirmPassword']").fill(password);
            
            // Click complete registration button
            await this.page.locator("//button[contains(text(),'Complete Registration')]").click();
            
            // Wait for success message or redirect
            await this.page.waitForSelector("//div[contains(text(),'Registration successful')]");
            
            console.log(`Registration successful for ${fullName}`);
            return true;
            
        } catch (error) {
            console.error(`Error during registration: ${error.message}`);
            return false;
        }
    }
}

// Test function to automate the registration process
test('Automated Registration', async ({ page }) => {
    const registration = new AutomatedRegistration(page);
    
    // Test data
    const testData = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        password: "Test123!@#"
    };
    
    // Execute registration
    console.log("Starting registration process...");
    await registration.registerUser(
        testData.fullName,
        testData.email,
        testData.password
    );
    
    // Wait for the process to complete
    await page.waitForTimeout(3000);
});
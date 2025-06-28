const { test, expect } = require('@playwright/test');

class AutomatedPasswordReset {
    constructor(page) {
        this.page = page;
    }

    async initiatePasswordReset(email) {
        try {
            await this.page.goto('https://www-develop.tradecopy.io/');
            await this.page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
            await this.page.locator("//div[normalize-space()='Login']").click();
            await this.page.locator("//a[contains(text(),'Forgot Password?')]").click();
            await this.page.waitForSelector("//input[@id='email']");
            await this.page.locator("//input[@id='email']").fill(email);
            await this.page.locator("//button[contains(text(),'Reset Password')]").click();
            await this.page.waitForSelector("//div[contains(text(),'Password reset email sent')]");
            
            console.log(`Password reset email sent to ${email}`);
            return true;
            
        } catch (error) {
            console.error(`Error initiating password reset: ${error.message}`);
            return false;
        }
    }

    async resetPassword(email, newPassword) {
        try {
            await this.page.goto('https://www-develop.tradecopy.io/auth/reset-password');
            await this.page.waitForSelector("//input[@id='email']");
            await this.page.locator("//input[@id='email']").fill(email);
            await this.page.locator("//input[@id='password']").fill(newPassword);
            await this.page.locator("//input[@id='confirmPassword']").fill(newPassword);
            await this.page.locator("//button[contains(text(),'Reset Password')]").click();
            await this.page.waitForSelector("//div[contains(text(),'Password reset successful')]");
            
            console.log("Password reset successful!");
            return true;
            
        } catch (error) {
            console.error(`Error resetting password: ${error.message}`);
            return false;
        }
    }
}
test('Automated Password Reset', async ({ page }) => {
    const passwordReset = new AutomatedPasswordReset(page);
    const testEmail = "test@example.com";
    const newPassword = "Test123!@#";
    console.log("Step 1: Initiating password reset...");
    await passwordReset.initiatePasswordReset(testEmail);
    await page.waitForTimeout(5000);
    console.log("Step 2: Resetting password...");
    await passwordReset.resetPassword(testEmail, newPassword);
    await page.waitForTimeout(3000);

}); 
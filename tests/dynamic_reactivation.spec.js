const { test, expect } = require('@playwright/test');

test('Login and Signup Test', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || ""; 
    const userPassword = process.env.USER_PASSWORD || ""; 

    if (!userEmail || !userPassword) {
        throw new Error("USER_EMAIL and USER_PASSWORD must be set as environment variables.");
    }

    await page.goto("https://www-develop.backtestdata.com/");
    await page.waitForSelector("(//*[name()='svg'][@role='img'])[1]");
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.waitForSelector("//input[@id='username']");
    await page.locator("//input[@id='username']").fill(userEmail);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);
});

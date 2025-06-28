const { test, expect } = require('@playwright/test');

test('Login and Handle Subscriptions', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+twice@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1##";
    const currentPassword = process.env.USER_PASSWORD || "Bangladesh1##";
    const newPassword = process.env.USER_PASSWORD || "Bangladesh1#";

    // Login
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmail);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);

    // Change Password
    await page.locator("//button[@id='radix-:rn:']").click();
    await page.locator("//span[normalize-space()='Security']").click();
    await page.locator("//input[@id='currentPassword']").fill(currentPassword);
    await page.locator("//input[@id='newPassword']").fill(newPassword);
    await page.locator("//button[normalize-space()='Update']").click();

    // Log Out 
    await page.locator("//span[normalize-space()='Logout']").click();
    await page.locator("//button[contains(text(),'Logout')]").click()
    await page.waitForTimeout(2000); 

    // Re-login with the New Password
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmail);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(newPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);

   
});

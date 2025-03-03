const { test, expect } = require('@playwright/test');

test('Login and Handle Subscriptions', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+ExpireNotification@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";
    const currentPassword = process.env.USER_PASSWORD || "Bangladesh1#";
    const newPassword = process.env.USER_PASSWORD || "Bangladesh1##";

    // Step 1: Initial Login
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmail);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);

    // Step 2: Change Password
    await page.locator("//button[@id='radix-:rn:']").click();
    await page.locator("//span[normalize-space()='Security']").click();
    await page.locator("//input[@id='currentPassword']").fill(currentPassword);
    await page.locator("//input[@id='newPassword']").fill(newPassword);
    await page.locator("//button[normalize-space()='Update']").click();

    // Step 3: Change Account Details
    await page.locator("//button[@id='radix-:r12:-trigger-accountDetails']").click();
    await page.locator("//button[@type='submit']//*[name()='svg']").click(); // Click the button
    await page.locator("//input[contains(@value,'Snigdha')]").click();
    await page.keyboard.press('Control+A'); // Simulate pressing the space key
    await page.keyboard.press('Backspace');
    await page.waitForSelector("//input[@type='text']");
    await page.locator("//input[@type='text']").fill('Sharmin Huq Snigdha'); 
    await page.locator("//button[@class='shadow-md bg-//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click();
});
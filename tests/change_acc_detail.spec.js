const { test, expect } = require('@playwright/test');

test('Login and Handle Subscriptions', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+subscriber@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";

    // Login
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmail);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);

    //Change Account Details
    await page.locator("//button[@id='radix-:rn:']").click();
    await page.locator("//span[normalize-space()='Security']").click();
    await page.locator("(//button[normalize-space()='Account Details'])[1]").click();
    await page.locator("//button[@type='submit']//*[name()='svg']").click(); 
    await page.locator("//input[contains(@value,'Sharmin Huq Snigdha')]").click();
    await page.keyboard.press('Control+A'); 
    await page.keyboard.press('Backspace');
    await page.waitForSelector("//input[@type='text']");
    await page.locator("//input[@type='text']").fill('Sharmin Huq'); 
    await page.locator("//button[@class='shadow-md bg-//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]").click();

});
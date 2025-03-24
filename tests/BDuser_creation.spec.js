const { test, expect } = require('@playwright/test');

test('Login and interact with "View All" button', async ({ page }) => {
    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const createEmail = process.env.USER_EMAIL || "sharmin.huq+salu@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; 
    const password = process.env.USER_PASSWORD || "Bangladesh1#"; 
    const confirmpass = process.env.USER_PASSWORD || "Bangladesh1#"; 

    // Navigate to the site and log in
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmailAdmin);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();

    // Create a new user
    await page.locator("//span[contains(@class,'font-medium text-sm')][normalize-space()='Users']").click();
    await page.locator("//button[normalize-space()='Create New User']").click();
    await page.locator("//input[@id='fullName']").fill('sh snigdha');
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='email']").fill(createEmail);
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='password']").fill(password);
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='confirmPassword']").fill(confirmpass);
    await page.waitForTimeout(1000);
    await page.locator("//button[normalize-space()='Create User']").click();
});

const { test, expect } = require('@playwright/test');

test('BD Create Transaction From Admin Portal', async ({ page }) => {
    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; 

    // Set viewport inside test function
    await page.setViewportSize({ width: 1400, height: 900 });

    // Navigate to website
    await page.goto('https://www-develop.backtestdata.com/');

    // Click profile icon & navigate to login page
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();

    // Login process
    await page.locator("//input[@id='username']").fill(userEmailAdmin);
    await page.waitForSelector("//input[@id='password']", { state: 'visible' });
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();

    // Navigate to transactions page
    await page.locator("//div[contains(text(),'Transactions')]").click();
    await page.locator("//button[normalize-space()='Create Transaction']").click();
    await page.waitForTimeout(1000);

    // Select "Purchase" from dropdown
    await page.locator("//label[@for='type']//div[contains(@class, 'react-select__input-container')]").click();
    await page.waitForSelector("//div[contains(@class, 'react-select__menu')]", { state: 'visible' });
    await page.click("text=Purchase");
    await page.waitForTimeout(1000);

    // Fill in amount
    await page.locator("//input[@id='amount']").fill("300");
    await page.waitForTimeout(1000);

    // Select "Succeeded" from dropdown
    await page.locator("//label[@for='status']//div[contains(@class, 'react-select__input-container')]").click();
    await page.waitForSelector("//div[contains(@class, 'react-select__menu')]", { state: 'visible' });
    await page.click("text=Succeeded");
    await page.waitForTimeout(1000);

    // Click "Create Transaction" button
    await page.locator("//button[contains(@type,'submit')][normalize-space()='Create Transaction']").click();
});

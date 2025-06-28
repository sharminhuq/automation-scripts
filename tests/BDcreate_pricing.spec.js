const { test, expect } = require('@playwright/test');
test('Login and interact with "View All" button', async ({ page }) => {
    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; 
   const planName = process.env.planName || "sharminhuqq";
   const marketName = process.env.marketName || "Forecx";

    // Navigate to the site and log in
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmailAdmin);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();

    // Create a new user
    await page.locator("//div[contains(text(),'Pricing Plans')]").click();
    await page.locator("//button[normalize-space()='Create Plan']").click();
    await page.locator("//input[@id='name']").fill(planName);
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='monthlyCharge']").fill("30");
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='amount']").fill("300");
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='size']").fill("3");
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='totalFiles']").fill("3");
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='yearSince']").fill("3");
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='market']").fill(marketName);
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='source']").fill("www.sourcefile.com");
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='sourceLink']").fill("www.sourcefile.com");
    await page.waitForTimeout(1000);
    await page.locator("//button[@type='submit'][normalize-space()='Create Plan']").click();
    await page.waitForTimeout(5000);

});

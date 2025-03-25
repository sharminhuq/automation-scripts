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

    // create instrument
    await page.locator("body > div:nth-child(1) > div:nth-child(4) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(3) > div:nth-child(5) > div:nth-child(1) > h3:nth-child(1) > button:nth-child(1) > svg:nth-child(2)").click();
    await page.locator("//span[normalize-space()='Instrument']").click();
    await page.locator("//button[normalize-space()='Add Instrument']").click()
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='name']").fill("aks");
    await page.locator("//button[@class='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-//*[name()='svg']")
    await page.locator("(//button[@type='submit'])[1]").hover();
await page.locator("(//button[@type='submit'])[1]").click();





    await page.waitForTimeout(1000);
    await page.locator("//input[@id='name']").fill("aks2");
    await page.locator("//button[@class='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-//*[name()='svg']")
    await page.locator("(//button[@type='submit'])[1]").hover();
await page.locator("(//button[@type='submit'])[1]").click();


    await page.locator("//input[@id='name']").fill("bnp");
    await page.locator("//button[@class='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-//*[name()='svg']")
    await page.locator("//button[@type='submit']//*[name()='svg']").click()
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='name']").fill("vps");
    await page.locator("//button[@class='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-//*[name()='svg']")
    await page.locator("//button[@type='submit']//*[name()='svg']").click()
    await page.waitForTimeout(1000);


    await page.locator("//button[normalize-space()='Submit']").click();
    await page.waitForTimeout(5000);

});

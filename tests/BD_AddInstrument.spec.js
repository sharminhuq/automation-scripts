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
    await page.waitForTimeout(1000);
    await page.locator("(//*[name()='svg'][@class='lucide lucide-plus w-24 h-24'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='name']").fill("aks2");
    await page.locator("(//*[name()='svg'][@class='lucide lucide-plus w-24 h-24'])[1]").click();


    await page.locator("//input[@id='name']").fill("tutul");
    await page.locator("(//*[name()='svg'][@class='lucide lucide-plus w-24 h-24'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='name']").fill("vps");
    await page.locator("(//*[name()='svg'][@class='lucide lucide-plus w-24 h-24'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='name']").fill("searchDelete");
    await page.locator("(//*[name()='svg'][@class='lucide lucide-plus w-24 h-24'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='name']").fill("Delenotworking");
    await page.locator("(//*[name()='svg'][@class='lucide lucide-plus w-24 h-24'])[1]").click();
    await page.waitForTimeout(1000);

    await page.locator("//button[normalize-space()='Submit']").click();
    await page.waitForTimeout(5000);

});

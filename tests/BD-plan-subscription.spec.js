const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
const { test, expect } = require('@playwright/test');
test('BD forget pass', async ({ page }) => {

    //BD Subscriber Login
    
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//span[@class='flex !text-start !justify-start lg:justify-center items-center pt-5'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill('sharmin.huq+tree@aitrade.ai');
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('Bangladesh1#');
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);

});
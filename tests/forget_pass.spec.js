const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
const { test, expect } = require('@playwright/test');
test('BD forget pass', async ({ page }) => {

//BD forget pass Subscriber

    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[@class='flex !text-start !justify-start lg:justify-center items-center'])[1]").click();
    await page.locator("(//div[@id='radix-:R6j6:'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("//span[@class='font-semibold text-lg 2xs-m:text-sm']").click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='email']").fill('sharmin.huq+subscriber5@aitrade.ai');
    await page.locator("//button[normalize-space()='Submit']").click();
    await page.waitForTimeout(3000);

    //Email Verification
    await page.goto("https://webmail.migadu.com/")
    await page.locator("//input[@placeholder='Email']").fill("sharmin.huq@aitrade.ai")
    await page.locator("//input[@placeholder='Password']").fill("Umra_December1#")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.locator("//input[@id='folderSearchInput']").fill(BDsearchMail)
    await page.waitForTimeout(5000);


    //BD forget pass Admin

    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[@class='flex !text-start !justify-start lg:justify-center items-center'])[1]").click();
    await page.locator("(//div[@id='radix-:R6j6:'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("//span[@class='font-semibold text-lg 2xs-m:text-sm']").click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='email']").fill('sharmin.huq+admin@aitrade.ai');
    await page.locator("//button[normalize-space()='Submit']").click();
    await page.waitForTimeout(3000);


    //TC forget pass Subscriber

    await page.goto("https://www-develop.tradecopy.io/");
    await page.locator("//button[@id='radix-:r3:']//span[@class='flex justify-center items-center']").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.waitForTimeout(1000);
    await page.locator("//span[@class='font-semibold text-lg 3xs:text-sm']").click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='email']").fill('sharmin.huq+subscriber5@aitrade.ai');
    await page.locator("//button[normalize-space()='Submit']").click();
    await page.waitForTimeout(3000);


    //TC forget pass Vendor

    await page.goto("https://www-develop.tradecopy.io/");
    await page.locator("//button[@id='radix-:r3:']//span[@class='flex justify-center items-center']").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.waitForTimeout(1000);
    await page.locator("//span[@class='font-semibold text-lg 3xs:text-sm']").click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='email']").fill('sharmin.huq+vendor@aitrade.ai');
    await page.locator("//button[normalize-space()='Submit']").click();
    await page.waitForTimeout(3000);


    //TC forget pass Admin

    await page.goto("https://www-develop.tradecopy.io/");
    await page.locator("//button[@id='radix-:r3:']//span[@class='flex justify-center items-center']").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.waitForTimeout(1000);
    await page.locator("//span[@class='font-semibold text-lg 3xs:text-sm']").click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='email']").fill('sharmin.huq+admin@aitrade.ai');
    await page.locator("//button[normalize-space()='Submit']").click();
    await page.waitForTimeout(5000);

    
});
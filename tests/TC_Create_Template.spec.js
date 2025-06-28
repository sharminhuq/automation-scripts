const { test, expect } = require('@playwright/test');
test('Login', async ({ page }) => {

    const userEmail = process.env.USER_EMAIL || "sharmin.huq+BDFeatureTest@aitrade.ai"; 
    const strategyName = process.env.USER_EMAIL || "sharminhuq"; 
    const userEmail3 = process.env.USER_EMAIL || "sharmin.huq+copier@aitrade.ai"; 
    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; 

    //TC Admin Login

    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill(userEmailAdmin)
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();

    //create template

    await page.locator("//div[contains(text(),'Strategies')]").click();
    await page.locator("//button[normalize-space()='Create Template']").click();
    await page.locator("//label[@for='market']//div[@class='react-select__input-container css-19bb58m']").click();
    await page.click('text=Futures');
    await page.waitForTimeout(1000); 
    await page.locator("//label[@for='type']//div[@class='react-select__input-container css-19bb58m']").click();
    await page.click('text=High Freq.')
    await page.waitForTimeout(1000); 
    await page.locator("//label[@for='userId']//div[@class='react-select__input-container css-19bb58m']").click()
    await page.click('text=10573 - Sharmin Huq')
    await page.waitForTimeout(1000); 
    await page.locator("//input[@id='name']").fill(strategyName)
    await page.waitForTimeout(1000); 
    await page.locator("//label[@for='instrument']//div[@class='react-select__input-container css-19bb58m']").click()
    await page.click('text=COCOA')
    await page.waitForTimeout(1000); 
    await page.locator("//input[@id='credit']").fill("200")
    await page.waitForTimeout(1000); 
    await page.locator("//label[@for='isVerified']//div[@class='react-select__input-container css-19bb58m']").click()
    await page.click('text= Verified')
    await page.waitForTimeout(1000); 
    await page.click("//button[normalize-space()='Add Strategy']").click()
    await page.waitForTimeout(1000); 
    
});
const { test, expect } = require('@playwright/test');
test('Login', async ({ page }) => {

    
    const strategyName = process.env.USER_EMAIL || "sharminhuq"; 
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

    //create review

    await page.locator("//span[contains(@class,'font-semibold text-sm text-start')]").click()
    await page.locator("//button[normalize-space()='Create Review']").click();
    await page.locator("//label[@for='userId']//div[@class='react-select__input-container css-19bb58m']").click()
    await page.click('text=10510 = Sharmin Huq')
    await page.locator("//label[@for='templateId']//div[@class='react-select__input-container css-19bb58m']").click()
    await page.click('text=1034 = Turbo Bandit')
    await page.click("//button[@id='1']").click()
    await page.click("//button[@id='2']").click()
    await page.click("//button[@id='3']").click()
    await page.click("//button[@id='4']").click()
    await page.click("//button[@id='5']").click()
    await page.locator("//textarea[@id='review']").fill("I am a trial free, and write this review. to have done with cultural")
    await page.locator("//button[normalize-space()='Submit Review']").click()

});
const { test, expect } = require('@playwright/test');
test('Login', async ({ page }) => {


    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; // Dynamic password input


//BD Admin Login
    
    await page.goto("https://www-develop.backtestdata.com/");
    await page.goto("(//span[@class='flex !text-start !justify-start lg:justify-center items-center'])[1]").click()
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmailAdmin);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(3000);
    

    //Product grant access
    await page.locator("//span[contains(@class,'font-medium text-sm')][normalize-space()='Users']").click();
    await page.locator("//h1[normalize-space()='10375']").click()
    await page.locator("//button[@id='radix-:r2b:-trigger-products']").click()
    await page.locator("//button[normalize-space()='Grant Access']").click()
    await page.locator("//div[contains(@class,'react-select__input-container css-19bb58m')]")
    await page.click("Text=Forex")
    
   



   
});
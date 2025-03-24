const { test, expect } = require('@playwright/test');

test('BD Create Transaction From Admin Portal', async ({ page }) => {
    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; 

    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmailAdmin);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();

    await page.locator("//div[contains(text(),'Transactions')]").click();
    await page.locator("//button[normalize-space()='Create Transaction']").click();
    
    await page.locator("//div[contains(@class,'w-full h-full react-select-container')]").click();
    await page.click('text= Purchase');
    await page.waitForTimeout(1000);

    await page.locator("//div[contains(@class,'w-full h-full react-select-container')]").click();
    await page.waitForSelector("//div[contains(@class, 'react-select__menu')]");
    await page.locator("(//div[contains(@class, 'react-select__menu')]//div[text()='10518 SHARMIN HUQ'])[2]").click();

    await page.locator("//input[@id='amount']").fill(300);
    await page.waitForTimeout(1000);
    await page.locator("//label[@for='status']//div[contains(@class, 'react-select__input-container')]").click();
    await page.click('text=Succeeded');
    await page.waitForTimeout(1000);

    await page.locator("//button[contains(@type,'submit')][normalize-space()='Create Transaction']").click();
});

const { test, expect } = require('@playwright/test');

test('Plan Subscription', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+subscriber@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";

    // BD Subscriber Login
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmail);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();


    //Plan subscribe
    await page.locator("(//button[contains(text(),'Buy Now')])[1]").click()
    await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
    await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
    await page.locator("//input[@id='expiryDate']").fill('02/34');
    await page.locator("//input[@id='cvc']").fill('456');
    await page.locator("//div[@class='react-select__value-container css-1d8n9bt']").click();
    await page.click("text=Bangladesh");
    await page.locator("//input[@id='city']").fill('Panthapath');
    await page.locator("//input[@id='state']").fill('Dhaka');
    await page.locator("//input[@id='postCode']").fill('34567');
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Subscribe']").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[contains(text(),'Close')]").click();
//stocks
    await page.locator("(//button[contains(text(),'Buy Now')])[2]").click()
    await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
    await page.locator("//input[@id='expiryDate']").fill('02/34');
    await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
    await page.locator("//input[@id='cvc']").fill('456');
    await page.locator("//div[@class='react-select__value-container css-1d8n9bt']").click();
    await page.click("text=Bangladesh");
    await page.locator("//input[@id='city']").fill('Panthapath');
    await page.locator("//input[@id='state']").fill('Dhaka');
    await page.locator("//input[@id='postCode']").fill('34567');
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Subscribe']").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[contains(text(),'Close')]").click();

//forex
    await page.locator("(//button[contains(text(),'Buy Now')])[3]").click()
    await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
    await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
    await page.locator("//input[@id='expiryDate']").fill('02/34');
    await page.locator("//input[@id='cvc']").fill('456');
    await page.locator("//div[@class='react-select__value-container css-1d8n9bt']").click();
    await page.click("text=Bangladesh");
    await page.locator("//input[@id='city']").fill('Panthapath');
    await page.locator("//input[@id='state']").fill('Dhaka');
    await page.locator("//input[@id='postCode']").fill('34567');
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Subscribe']").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[contains(text(),'Close')]").click();

    //futures
    await page.locator("(//button[contains(text(),'Buy Now')])[3]").click()
    await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
    await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
    await page.locator("//input[@id='expiryDate']").fill('02/34');
    await page.locator("//input[@id='cvc']").fill('456');
    await page.locator("//div[@class='react-select__value-container css-1d8n9bt']").click();
    await page.click("text=Bangladesh");
    await page.locator("//input[@id='city']").fill('Panthapath');
    await page.locator("//input[@id='state']").fill('Dhaka');
    await page.locator("//input[@id='postCode']").fill('34567');
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Subscribe']").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[contains(text(),'Close')]").click()

    });

  
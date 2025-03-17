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

    // // **Fix: Wait for dashboard page to load correctly**
    // await page.waitForURL('https://customer-develop.backtestdata.com/dashboard/', { timeout: 15000 }); // Adjust URL pattern if needed
    // await page.waitForSelector("https://customer-develop.backtestdata.com/dashboard/", { timeout: 15000 });

    // console.log("Logged in successfully, now checking for plans.");

    // // Plan subscription
    // const plans = ["Commodity", "Bonds", "Stocks", "Futures", "Cryptocurrencies", "Forex"];

    // for (const plan of plans) {
    //     // Wait for buy button to be visible
    //     const buyButtonSelector = `//button[contains(.,'Buy Now') and contains(.,'${plan}')]`;

    //     await page.waitForTimeout(3000); // Giving some buffer time for elements to load

    //     const buyButton = page.locator(buyButtonSelector);
    //     if (await buyButton.isVisible()) {
    //         console.log(`Buying plan: ${plan}`);
    //         await buyButton.click();
    //         await page.waitForTimeout(2000);

    //         await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
    //         await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
    //         await page.locator("//input[@id='expiryDate']").fill('02/34');
    //         await page.locator("//input[@id='cvc']").fill('456');
    //         await page.locator("//div[@class='react-select__value-container css-1d8n9bt']").click();
    //         await page.click("text=Bangladesh");
    //         await page.locator("//input[@id='city']").fill('Panthapath');
    //         await page.locator("//input[@id='state']").fill('Dhaka');
    //         await page.locator("//input[@id='postCode']").fill('34567');
    //         await page.locator("//input[@id='check']").check();
    //         await page.locator("//button[normalize-space()='Subscribe']").click();
    //         await page.waitForTimeout(2000);
    //         await page.locator("//button[contains(text(),'Close')]").click();
    //     } else {
    //         console.log(`No buy button found for ${plan}`);
    //     }
    // }
});

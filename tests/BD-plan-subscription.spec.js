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
    await page.waitForTimeout(5000);

    // Plan subscription
    const plans = ["Commodity", "Bonds", "Stocks", "Futures", "Cryptocurrencies", "Forex"];

    for (const plan of plans) {
        // Wait for the buy button to be visible
        const buyButtonSelector = `//button[contains(text(),'Buy Now') and contains(text(),'${plan}')]`;
        await page.waitForSelector(buyButtonSelector, { state: 'visible', timeout: 5000 });

        const buyButton = await page.locator(buyButtonSelector);
        if (await buyButton.isVisible()) {
            await buyButton.click();
            await page.waitForTimeout(2000);
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
            await page.locator("//button[@class='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-']").click();
        } else {
            console.log(`No buy button found for ${plan}`);
        }
    }
});

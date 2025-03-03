const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+BDFeatureTest@aitrade.ai";
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
        const buyButton = await page.locator("//button[normalize-space()='Buy Now']");
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
            await page.waitForTimeout(5000);
        } else {
            console.log(`No buy button found for ${plan}`);
        }
    }

    // Billing cancellation
    await page.locator("//span[normalize-space()='Billing']").click();
    const cancelPlan = ["Commodity", "Bonds", "Stocks", "Futures", "Cryptocurrencies", "Forex"];

    for (const plan of cancelPlan) {
        const cancelButton = await page.locator(`//div[contains(text(),'${plan}')]/following-sibling::div//span[normalize-space()='Cancel Subscription']`);
        if (await cancelButton.isVisible()) {
            await cancelButton.click();
            await page.waitForTimeout(2000);
            await page.locator("//input[@id='cancellationReason']").fill('I want to unsubscribe');
            await page.locator("//button[normalize-space()='Confirm Cancellation']").click();
        } else {
            console.log(`No cancel button found for ${plan}`);
        }
    }
});

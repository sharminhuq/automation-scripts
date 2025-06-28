const { test, expect } = require('@playwright/test');

test('Login and Handle Subscriptions', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+subscriber@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";

    // Login
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmail);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);

    // Handle Plans
    const plans = [ "Stocks", "Futures", "Cryptocurrencies", "Forex"];
    for (const plan of plans) {
        const buyButton = page.locator(`(//button[contains(text(),'Buy Now')])[1]`);

        if (await buyButton.isVisible()) {
            // Handle Subscription
            await buyButton.click();
            await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
            await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
            await page.locator("//input[@id='expiryDate']").fill('02/34');
            await page.locator("//input[@id='cvc']").fill('456');
            await page.locator("//div[@class='react-select__input-container css-ackcql']").click();
            await page.click("text=Bangladesh");
            await page.locator("//input[@id='city']").fill('Panthapath');
            await page.locator("//input[@id='state']").fill('Dhaka');
            await page.locator("//input[@id='postCode']").fill('34567');
            await page.locator("//input[@id='check']").check();
            await page.locator("//button[normalize-space()='Subscribe']").click();
            await page.waitForTimeout(1000);
            await page.locator("//button[contains(@class,'bg-[#0130B7]')]").click();
            console.log(`${plan} subscription completed.`);
        } else {
            console.log(`No buy button found for ${plan}. Proceeding to cancellation.`);
            // Navigate to Billing for Cancellation
            await page.goto("https://customer-develop.backtestdata.com/dashboard/?redirect=true");
            await page.locator("//span[normalize-space()='Billing']").click();

            const cancelButton = page.locator("//button[contains(text(),'Cancel')]");
            if (await cancelButton.isVisible()) {
                await cancelButton.click();
                await page.locator("//input[@id='cancellationReason']").fill('I want to unsubscribe');
                await page.locator("//button[normalize-space()='Confirm Cancellation']").click();
                console.log(`${plan} plan canceled successfully.`);
            } else {
                console.log(`No cancel button found for ${plan}.`);
            }
        }
    }
});

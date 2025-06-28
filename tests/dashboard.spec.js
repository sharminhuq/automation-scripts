const { test, expect } = require('@playwright/test');

test('Login, Handle Subscriptions, and Clickable Elements', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+subscriber@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";

    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("#username").fill(userEmail);
    await page.waitForSelector("#password", { timeout: 5000 });
    await page.locator("#password").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);

    console.log("Successfully logged in.");

    const cards = page.locator('div.card');
    const cardCount = await cards.count();

    for (let i = 0; i < cardCount; i++) {
        const card = cards.nth(i);
        if (await card.isVisible() && await card.isEnabled()) {
            await card.click();
            await page.waitForTimeout(2000);
            await page.locator("//a[contains(@href, '/dashboard')]").click();
            await page.waitForLoadState();
        }
    }

    const buttons = page.locator('button');
    const buttonCount = await buttons.count();

    for (let i = 0; i < buttonCount; i++) {
        const button = buttons.nth(i);
        if (await button.isVisible() && await button.isEnabled()) {
            await button.click();
            await page.waitForTimeout(500);
            await page.locator("//a[contains(@href, '/dashboard')]").click();
            await page.waitForLoadState();
        }
    }

    const sidebarItems = page.locator('div.sidebar-item');
    const sidebarItemCount = await sidebarItems.count();

    for (let i = 0; i < sidebarItemCount; i++) {
        const sidebarItem = sidebarItems.nth(i);
        if (await sidebarItem.isVisible()) {
            await sidebarItem.click();
            await page.waitForTimeout(500);
            await page.locator("//a[contains(@href, '/dashboard')]").click();
            await page.waitForLoadState();
        }
    }

    console.log("Completed interaction with clickable elements.");

    await page.locator("//span[normalize-space()='Logout']").click();
    await page.locator("//button[contains(text(),'Logout')]").click();
    await page.waitForTimeout(2000);
    console.log("Successfully logged out.");
});

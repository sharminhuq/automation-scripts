const { test, expect } = require('@playwright/test');

test('Login, Handle Subscriptions, and Clickable Elements', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+twice@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";

    // Step 1: Login
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmail);
    await page.waitForSelector("//input[@id='password']", { timeout: 5000 });
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);

    console.log("✅ Successfully logged in.");

    // Step 2: Handle Clickable Cards
    const cards = page.locator('div.card'); 
    const cardCount = await cards.count();

    console.log(`🔍 Found ${cardCount} cards.`);

    for (let i = 0; i < cardCount; i++) {
        const card = cards.nth(i);
        try {
            if (await card.isVisible() && await card.isEnabled()) {
                console.log(`✅ Clicking on card ${i + 1}`);
                await card.click();
                await page.waitForTimeout(2000); 
                // Go back to the dashboard
                await page.locator("//a[contains(@href, '/dashboard')]").click();
                await page.waitForLoadState();
            } else {
                console.log(`🚫 Card ${i + 1} is not clickable.`);
            }
        } catch (error) {
            console.warn(`❌ Error interacting with card ${i + 1}:`, error.message);
        }
    }

    // Step 3: Handle Clickable Buttons
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();

    console.log(`🔍 Found ${buttonCount} buttons.`);

    for (let i = 0; i < buttonCount; i++) {
        const button = buttons.nth(i);
        try {
            if (await button.isVisible() && await button.isEnabled()) {
                console.log(`✅ Clicking on button ${i + 1}`);
                await button.click();
                await page.waitForTimeout(500); // Wait for button functionality
                // Go back to the dashboard
                await page.locator("//a[contains(@href, '/dashboard')]").click();
                await page.waitForLoadState();
            } else {
                console.log(`🚫 Button ${i + 1} is not clickable.`);
            }
        } catch (error) {
            console.warn(`❌ Error interacting with button ${i + 1}:`, error.message);
        }
    }

    // Step 4: Handle Sidebar Expand/Collapse
    const sidebarItems = page.locator('div.sidebar-item'); // Adjust selector for sidebar
    const sidebarItemCount = await sidebarItems.count();

    console.log(`🔍 Found ${sidebarItemCount} sidebar items.`);

    for (let i = 0; i < sidebarItemCount; i++) {
        const sidebarItem = sidebarItems.nth(i);
        try {
            if (await sidebarItem.isVisible()) {
                console.log(`✅ Toggling sidebar item ${i + 1}`);
                await sidebarItem.click();
                await page.waitForTimeout(500); // Allow time for animation
                // Go back to the dashboard
                await page.locator("//a[contains(@href, '/dashboard')]").click();
                await page.waitForLoadState();
            } else {
                console.log(`🚫 Sidebar item ${i + 1} is not visible.`);
            }
        } catch (error) {
            console.warn(`❌ Error interacting with sidebar item ${i + 1}:`, error.message);
        }
    }

    console.log("✅ Completed interaction with clickable elements.");

    // Step 5: Log Out
    try {
        await page.locator("//span[normalize-space()='Logout']").click();
        await page.locator("//button[contains(text(),'Logout')]").click();
        await page.waitForTimeout(2000);
        console.log("✅ Successfully logged out.");
    } catch (error) {
        console.warn("❌ Error during logout:", error.message);
    }
});

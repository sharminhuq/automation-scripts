const { test, expect } = require('@playwright/test');
import dotenv from "dotenv";
dotenv.config();

test('Login and Withdraw with dynamic row selection', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+vendor@aitrade.ai";
    const adminEmail = process.env.ADMIN_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";
    const withdrawalAmount = process.env.WITHDRAW_AMOUNT || '100';
    const Wdescription = `I happily withdraw ${withdrawalAmount} USD from my vendor account`;

    // Vendor Login
    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").waitFor({ state: 'visible' });
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill(userEmail); 
    await page.locator("//input[@id='password']").fill(userPassword); 
    await page.locator("//button[normalize-space()='Login']").click();
    // Withdraw Process
    await page.locator("//span[normalize-space()='Income']").waitFor({ state: 'visible' });
    await page.locator("//span[normalize-space()='Income']").click();
    await page.locator("//span[@class='text-base']").click();
    await page.locator("//input[@placeholder='Withdraw Amount']").fill(withdrawalAmount);
    await page.locator("//textarea[@placeholder='Optional Description']").fill(Wdescription);
    await page.locator("(//button[contains(@class, 'withdraw-button')])[1]").click();
    await page.waitForTimeout(2000);

    // Admin Login
    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("//button[@id='radix-:r12:']//img[@alt='Profile']").waitFor({ state: 'visible' });
    await page.locator("//button[@id='radix-:r12:']//img[@alt='Profile']").click();
    await page.locator("//button[normalize-space()='Logout']").click();
    await page.locator("//button[contains(@class, 'bg-red-600')]").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill(adminEmail);
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();

    // Update Transaction
    const firstRow = page.locator("//table//tr[td[contains(text(), 'Withdrawal')]][1]");
    await firstRow.scrollIntoViewIfNeeded();
    await firstRow.waitFor({ state: 'visible' });
    await firstRow.click();
    await page.locator("//button[normalize-space()='Update']").click();
    await page.locator("(//*[name()='svg'][@class='css-8mmkcg'])[3]").click();
    await page.locator("text=Succeeded").click(); // Make sure 'Succeeded' text is visible and clickable
    await page.locator("//button[normalize-space()='Update Transaction']").click();
    await page.waitForTimeout(2000);
    
});

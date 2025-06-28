const { test, expect } = require('@playwright/test');
import dotenv from "dotenv";
dotenv.config();

test('Login and Withdraw with dynamic row selection', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+vendor@aitrade.ai";
    const AdminEmail = process.env.ADMIN_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";
    const withdrawalAmount = process.env.WITHDRAW_AMOUNT || '100';
    const Wdescription = `I happily withdraw ${withdrawalAmount} USD from my vendor account`;

    // Vendor Login
    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill(userEmail); // Dynamic variable
    await page.locator("//input[@id='password']").fill(userPassword); // Dynamic variable
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForLoadState('networkidle');

    // Withdraw Process
    await page.locator("//span[normalize-space()='Income']").click();
    await page.locator("//span[@class='text-base']").click();
    await page.locator("//input[@placeholder='Withdraw Amount']").fill(withdrawalAmount)
    await page.locator("//textarea[@placeholder='Optional Description']").fill(Wdescription)
    await page.locator("(//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 withdraw-button w-full mt-3'])[1]").click();
    await page.waitForTimeout(2000);

    // Admin Login
    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("//button[@id='radix-:r3:']//span[@class='flex justify-center items-center']").click();
    await page.locator("//button[normalize-space()='Logout']").click();
    await page.locator("//button[contains(@class, 'bg-red-600')]").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill(AdminEmail);
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForLoadState('networkidle');

    // Update Transaction
    const firstRow = page.locator("//table//tr[td[normalize-space(text())='Withdrawal']][1]");
    await firstRow.click();
    await page.locator("//button[normalize-space()='Update']").click();
    await page.locator("(//*[name()='svg'][@class='css-8mmkcg'])[3]").click();
    await page.click('text=Succeeded');
    await page.locator("//button[normalize-space()='Update Transaction']").click();
    await page.waitForTimeout(2000);
});

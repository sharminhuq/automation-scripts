 //Revoke Access Code
 const { test, expect } = require('@playwright/test');

 test('Revoke Access for All Plans', async ({ page }) => {
     const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
     const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";
 
     // BD Admin Login
     await page.goto("https://www-develop.backtestdata.com/");
     await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
     await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
     await page.locator("//input[@id='username']").fill(userEmailAdmin);
     await page.waitForSelector("//input[@id='password']");
     await page.locator("//input[@id='password']").fill(userPassword);
     await page.locator("//button[normalize-space()='Login']").click();
     await page.waitForTimeout(3000);
 
     // Navigate to User Access Page
     await page.locator("//span[contains(@class,'font-medium text-sm')][normalize-space()='Users']").click();
     await page.waitForSelector("//h1[normalize-space()='10434']", { state: 'visible' });
     await page.locator("//h1[normalize-space()='10434']").click();
     await page.waitForSelector("(//button[normalize-space()='Products'])[1]", { state: 'visible' });
     await page.locator("(//button[normalize-space()='Products'])[1]").click();
     await page.waitForTimeout(3000);

     
     // Revoke Access for All Plans
     const plans = ["Commodity", "Bonds", "Stocks", "Futures", "Cryptocurrencies", "Forex"];
 
     for (const plan of plans) {
         const revokeButton = await page.locator(`(//button[contains(text(),'Revoke Access')])[1]`);
         if (await revokeButton.isVisible()) {
             await revokeButton.click();
             await page.waitForSelector("(//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:!bg-red-600 h-10 px-4 py-2 w-full'])[1]", { state: 'visible' });
             await page.locator("(//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:!bg-red-600 h-10 px-4 py-2 w-full'])[1]").click();
             await page.waitForTimeout(2000);
         } else {
             console.log(`No revoke button found for ${plan}`);
         }
     }
 
     console.log("All granted accesses have been revoked successfully.");
 });
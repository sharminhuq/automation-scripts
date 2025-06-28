import dotenv from "dotenv";
dotenv.config();

const { test, expect } = require('@playwright/test');

test('Dynamic Login Test', async ({ page }) => {
    // Get user credentials from .env
    const userEmail = process.env.USER_EMAIL;
    const userPassword = process.env.USER_PASSWORD;

    if (!userEmail || !userPassword) {
        console.error("ERROR: Missing credentials! Please set USER_EMAIL and USER_PASSWORD in your .env file.");
        return;
    }

    // Select website based on ENV variable
    const websiteChoice = process.env.WEBSITE_CHOICE || "1"; 

    try {
        if (websiteChoice === '1') {
            // BacktestData Login
            await page.goto('https://www-develop.backtestdata.com/');
            await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
            await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
            
            // Login
            await page.locator("//input[@id='username']").fill(userEmail);
            await page.waitForSelector("//input[@id='password']");
            await page.locator("//input[@id='password']").fill(userPassword);
            await page.locator("//button[normalize-space()='Login']").click();
            
            // Logout
            await page.locator("(//span[@class='pl-2'])[1]").click();
            await page.locator("//button[contains(text(),'Logout')]").click();
            
        } else if (websiteChoice === '2') {
            // TradeCopy Login
            await page.goto('https://www-develop.tradecopy.io/');
            await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
            await page.locator("//div[normalize-space()='Login']").click();
            
            // Login
            await page.locator("//input[@id='username']").fill(userEmail);
            await page.waitForSelector("//input[@id='password']");
            await page.locator("//input[@id='password']").fill(userPassword);
            await page.waitForTimeout(3000);
            await page.locator("//button[normalize-space()='Login']").click();
            await page.waitForTimeout(5000);
            
            // Logout
            await page.locator("//span[normalize-space()='Logout']").click();
            await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();
        }
        
        console.log('Login and logout completed successfully!');
        
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
});

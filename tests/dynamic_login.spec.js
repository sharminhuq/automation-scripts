const { test, expect } = require('@playwright/test');
const readline = require('readline');

// Function to get user input
const getUserInput = (question) => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

test('Dynamic Login Test', async ({ page }) => {
    // Get user credentials
    const userEmail = await getUserInput('Enter your email: ');
    const userPassword = await getUserInput('Enter your password: ');
    
    // Get the website type
    console.log('\nSelect website to test:');
    console.log('1. BacktestData (BD)');
    console.log('2. TradeCopy (TC)');
    const websiteChoice = await getUserInput('Enter your choice (1 or 2): ');
    
    // Get the user type
    console.log('\nSelect user type:');
    console.log('1. Admin');
    console.log('2. Subscriber');
    console.log('3. Vendor');
    console.log('4. Copier');
    const userType = await getUserInput('Enter your choice (1-4): ');

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
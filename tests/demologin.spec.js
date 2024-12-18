const { test, expect } = require('@playwright/test');
test('Login', async ({ page }) => {

    const userEmail = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai"; // Dynamic email input
    const userEmail2 = process.env.USER_EMAIL || "sharmin.huq+vendor@aitrade.ai"; // Dynamic email input
    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; // Dynamic password input
//BD Admin Login
    
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//span[@class='flex !text-start !justify-start lg:justify-center items-center pt-5'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill('userEmailAdmin');
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('userPassword');
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);
    await page.locator("(//span[@class='pl-2'])[1]").click()
    await page.locator("//button[contains(text(),'Logout')]").click()
   
   
//BD Subscriber Login
   
    await page.locator("(//span[@class='flex !text-start !justify-start lg:justify-center items-center pt-5'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill('userEmail');
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('userPassword');
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);


//TC Subscriber Login
      
    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill('userEmail');
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('userPassword');
    await page.waitForTimeout(3000);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);
    await page.locator("(//span[normalize-space()='Logout'])[1]").click()
    await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();

//TC Vendor Login
    
    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//button[normalize-space()='Logout']").click();
    await page.locator("//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill('userEmail2');
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('userPassword');
    await page.waitForTimeout(3000);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);
    await page.locator("//span[normalize-space()='Logout']").click()
    await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();
      
  
   
//TC Admin Login

    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//button[normalize-space()='Logout']").click();
    await page.locator("//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill("userEmailAdmin")
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('userPassword');
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000); 
   
});
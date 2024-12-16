const { test, expect } = require('@playwright/test');
test('Login', async ({ page }) => {

    //TC Vendor Login
    
    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill('sharmin.huq+vendor@aitrade.ai');
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('Bangladesh1#');
    await page.waitForTimeout(3000);
    await page.locator("//button[normalize-space()='Login']").click();

    //Withdraw
    const withdrawalAmount = 'a';
    await page.locator("//span[normalize-space()='Income']").click();
    await page.locator("//span[@class='text-base']").click();
    await page.locator("//input[@placeholder='Withdraw Amount']").fill('');
    await page.locator("//input[@placeholder='Withdraw Amount']").press('Control+A');
    await page.locator("//input[@placeholder='Withdraw Amount']").press('Backspace');
    await page.locator("//input[@placeholder='Withdraw Amount']").fill('50');
    await page.locator("//textarea[@placeholder='Optional Description']").fill('I happily withdraw 200USD from my vendor account');
    await page.locator("(//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 withdraw-button w-full mt-3'])[1]").click();
    await page.waitForTimeout(10000);


//TC Admin Login

    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//button[normalize-space()='Logout']").click();
    await page.locator("//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill("sharmin.huq+admin@aitrade.ai")
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('Bangladesh1#');
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000); 

    await page.locator("(//button[@id='radix-:ro:'])[1]").click();
    await page.locator("//span[normalize-space()='Withdrawal']").click();
    await page.locator("(//*[name()='svg'][@class='lucide lucide-chevron-left '])[1]").click();
    await page.locator("(//*[name()='path'])[50]").first().click();
    await page.locator("//div[normalize-space()='Update']").click();
    await page.locator("(//*[name()='svg'][@class='css-8mmkcg'])[3]").click();
    await page.click('text=Succeeded');
    await page.locator("//button[normalize-space()='Update Transaction']").click();

    await page.waitForTimeout(10000);


});
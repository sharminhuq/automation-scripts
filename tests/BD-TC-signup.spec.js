const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
const { test, expect } = require('@playwright/test');
test('Admin Login', async ({ page }) => {

//BD SignUp

    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[contains(text(),'Pricing')])[1]").click();
    await page.locator("//div[@id='Futures1']//button[@class='inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-[50px] px-3 rounded-full hover:scale-105 transition-all duration-300 !border-blue-600 border-1 text-base w-[90%] 71sm:!px-[70px]'][normalize-space()='Buy Now']").click();
    await page.locator("//input[@id='email']").fill(`sharmin.huq+${timestamp}@aitrade.ai`);
    await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
    await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
    await page.locator("//input[@id='expiryDate']").fill('02/34');
    await page.locator("//input[@id='cvc']").fill('456');
    await page.locator("//div[@class='react-select__input-container css-19bb58m']").click();
    await page.click('text=Australia');
    await page.locator("//input[@id='city']").fill('Panthapath');
    await page.locator("//input[@id='state']").fill('Dhaka');
    await page.locator("//input[@id='postCode']").fill('34567');
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Confirm Payment']").click();
    await page.waitForTimeout(10000);


//TC register for subscriber

    await page.goto("https://www-develop.tradecopy.io/");
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1) > svg:nth-child(1)").click();
    await page.locator("//div[contains(@class,'Main_url-query-button__8gH1s')]").click();
    await page.locator("(//div[@class='border-[#f7f7f7] shadow-2md w-[200px] h-40 text-center px-4 py-[13px] rounded-[28px] border-[3px] border-solid bg-[#fff] hover:bg-[#eff8ff] hover:cursor-pointer hover:border-[#0130b7] 2xs-l:m-auto'])[1]").click()
    await page.locator("//div[contains(@class,'w-full text-center m-auto')]").click()
    await page.locator("//input[@id='email']").fill(`sharmin.huq+${timestamp}@aitrade.ai`);
    await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
    await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
    await page.locator("//input[@id='expiryDate']").fill('02/34');
    await page.locator("//input[@id='cvc']").fill('456');
    await page.locator("//div[@class='react-select__input-container css-19bb58m']").click();
    await page.click('text=Australia');
    await page.locator("//input[@id='city']").fill('Panthapath');
    await page.locator("//input[@id='state']").fill('Dhaka');
    await page.locator("//input[@id='postCode']").fill('34567');
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Subscribe']").click();
    await page.waitForTimeout(10000);


//TC register for vendor

    await page.goto("https://www-develop.tradecopy.io/");
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1) > svg:nth-child(1)").click();
    await page.locator("//div[contains(@class,'Main_url-query-button__8gH1s')]").click();
    await page.locator("(//div[@class='border-[#f7f7f7] shadow-2md w-[200px] h-40 text-center px-4 py-[13px] rounded-[28px] border-[3px] border-solid bg-[#fff] hover:bg-[#eff8ff] hover:cursor-pointer hover:border-[#0130b7] 2xs-l:mb-auto 2xs-l:mx-auto'])[1]").click()
    await page.locator("//div[contains(@class,'w-full text-center m-auto')]").click();
    await page.locator("//input[@id='fullName']").fill('Sharmin Huq');
    await page.locator("//input[@id='email']").fill(`sharmin.huq+${timestamp}@aitrade.ai`);
    await page.locator("//input[@id='password']").fill('Bangladesh1#');
    await page.locator("//input[@id='repeatPassword']").fill('Bangladesh1#');
    await page.locator("//textarea[@id='description']").fill('As an experienced trader, I specialize in [mention your specific markets, like forex, stocks, crypto, etc.], leveraging insights and proven strategies to maximize growth and manage risk effectively. I am committed to transparency, disciplined trading practices, and continual market analysis to help you achieve your financial goals. Join my trade journey to benefit from a well-informed, responsive trading approach.');
    await page.locator("//button[normalize-space()='Complete Registration']").click();
    await page.waitForTimeout(10000);
    
    
});

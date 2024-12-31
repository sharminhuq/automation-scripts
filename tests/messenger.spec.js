const { test, expect } = require('@playwright/test');
test('Login', async ({ page }) => {

    const userEmail = process.env.USER_EMAIL || "sharmin.huq+vendor@aitrade.ai"; // Dynamic email input
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; // Dynamic password input


//TC register for vendor
await page.goto("https://www-develop.tradecopy.io/");
await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1) > svg:nth-child(1)").click();
await page.locator("//div[contains(@class,'Main_url-query-button__8gH1s')]").click();
await page.locator("(//div[@class='border-[#f7f7f7] shadow-2md w-[200px] h-40 text-center px-4 py-[13px] rounded-[28px] border-[3px] border-solid bg-[#fff] hover:bg-[#eff8ff] hover:cursor-pointer hover:border-[#0130b7] 2xs-l:mb-auto 2xs-l:mx-auto'])[1]").click()
await page.locator("//div[contains(@class,'w-full text-center m-auto')]").click();
await page.locator("//input[@id='fullName']").fill('Sharmin Huq');
await page.locator("//input[@id='email']").fill('userEmail');
await page.locator("//input[@id='password']").fill('userPassword');
await page.locator("//input[@id='repeatPassword']").fill('userPassword');
await page.locator("//textarea[@id='description']").fill('As an experienced trader, I specialize in [mention your specific markets, like forex, stocks, crypto, etc.], leveraging insights and proven strategies to maximize growth and manage risk effectively. I am committed to transparency, disciplined trading practices, and continual market analysis to help you achieve your financial goals. Join my trade journey to benefit from a well-informed, responsive trading approach.');
await page.locator("//button[normalize-space()='Complete Registration']").click();
await page.waitForTimeout(10000);

//Log in to Mailosaur
await page.goto("https://mailosaur.com/app");
await page.locator("//input[@id='email']").fill('userEmail2'); 
await page.locator("//button[normalize-space()='Continue']").click();
await page.locator("//input[@id='password']").fill(userPassword); 
await page.locator("//button[normalize-space()='Log in']").click();
await page.locator("text=Go to inbox").click(); // "Go to email inbox" 
await page.locator("//tbody/tr[1]/td[2]/div[1]").click();
await page.locator("//a[normalize-space()='Verify Email']").click();
await page.waitForTimeout(10000);

//Login as a vendor
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

//create a strategy
await page.locator("//button[@id='radix-:r1g:']").click()
await page.locator("//button[normalize-space()='Create Strategy']").click()
await page.locator("//input[@id='name']").fill('tbt')
await page.locator("//input[@id='credit']").fill('00')
await page.locator("//div[@class='Main_select-main__nDkMG react-select-container !h-//div[@class='react-select__input-container css-19bb58m']")
await page.click("text=Forex");
await page.locator("//label[@for='type']//div[@class='react-select__control css-13cymwt-control']").click()
await page.click("text=High Freq.");
await page.locator("//label[@for='instrument']//div[@class='react-select__control css-13cymwt-control']").click()
await page.click("text=UKOIL")
await page.locator("//span[@class='m-auto']").click()

//Login as a subscriber
await page.goto('https://www-develop.tradecopy.io/');
await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
await page.locator("//div[normalize-space()='Login']").click();
await page.locator("//input[@id='username']").fill('userEmail');
await page.waitForSelector("//input[@id='password']");
await page.locator("//input[@id='password']").fill('userPassword');
await page.waitForTimeout(3000);
await page.locator("//button[normalize-space()='Login']").click();
await page.waitForTimeout(10000);

//Subscribe a strategy
await page.locator("//span[@class='pl-0'][normalize-space()='Strategies']").click();
await page.locator("//body[1]/div[1]/div[4]/section[1]/div[2]/div[2]/div[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[2]/div[2]/section[1]/div[5]/a[1]/div[1]/div[2]").click();
await page.locator("//button[normalize-space()='Subscribe']").click();
await page.locator("//input[@id='check']").check();
await page.locator("//button[normalize-space()='Launch']").click();
await page.waitForTimeout(10000);

await page.locator("//a[@class='text-gray-600 text-base font-medium hover:text-blue-600 hover:no-underline whitespace-nowrap'][normalize-space()='Strategies']").click();
await page.locator("//body[1]/div[1]/div[4]/section[1]/div[2]/div[2]/div[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[2]/div[2]/section[1]/div[9]/a[1]/div[1]/div[2]").click();
await page.locator("//button[normalize-space()='Subscribe']").click();
await page.locator("//input[@id='check']").check();
await page.locator("//button[normalize-space()='Launch']").click();
await page.waitForTimeout(10000);

await page.locator("//a[@class='text-gray-600 text-base font-medium hover:text-blue-600 hover:no-underline whitespace-nowrap'][normalize-space()='Strategies']").click();
await page.locator("//body[1]/div[1]/div[4]/section[1]/div[2]/div[2]/div[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[2]/div[2]/section[1]/div[1]/a[1]/div[1]/div[2]").click();
await page.locator("//button[normalize-space()='Purchase & Subscribe']").click();
await page.locator("//button[normalize-space()='Next']").click();
await page.locator("(//div[@class='w-[300px] cursor-pointer mr-[15px] mt-[15px] px-[22px] py-[18px] rounded-xl border-4 border-solid border-[#c6cfe4]'])[1]").click();
await page.locator("//button[normalize-space()='Next']").click();
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
await page.locator("(//button[normalize-space()='Confirm'])[1]").click();
await page.waitForTimeout(15000);

//login as a vendor
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

//start manual trading
await page.locator("//span[@class='pl-0'][normalize-space()='Strategies']").click()
await page.locator("//h1[normalize-space()='10087']").click()
await page.locator("//button[@id='radix-:r67:-trigger-manual']").click()
await page.locator("//button[normalize-space()='Buy']").click()
await page.locator("//button[normalize-space()='Sell']").click()
await page.locator("//button[normalize-space()='Reverse']").click()
await page.locator("//button[normalize-space()='Exit']").click()

//Redirect to messenger for checking the signal

});
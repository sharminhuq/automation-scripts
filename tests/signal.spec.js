const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
const { test, expect } = require('@playwright/test');
test('Admin Login', async ({ page }) => {

   
    const fullNameField = "Sharmin Huq";
    const emailField = "sharmin.huq+pv@aitrade.ai";
    const emailField2 = "sharmin.huq+pc@aitrade.ai";
    const passwordField = "Bangladesh1#";
    const repeatPasswordField = "Bangladesh1#";
    const description = `As an experienced trader, I specialize in [mention your specific markets, like forex, stocks, crypto, etc.],
    leveraging insights and proven strategies to maximize growth and manage risk effectively.
    I am committed to transparency, disciplined trading practices, and continual market analysis
    to help you achieve your financial goals. Join my trade journey to benefit from a well-informed,
    responsive trading approach.`;
    const strategyName = "pc1";
    const strategySearch = "pc";

 //TC register for vendor


    await page.goto("https://www.tradecopy.io/");
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1) > svg:nth-child(1)").click();
    await page.locator("//div[contains(@class,'Main_url-query-button__8gH1s')]").click();
    await page.locator("(//div[@class='border-[#f7f7f7] shadow-2md w-[200px] h-40 text-center px-4 py-[13px] rounded-[28px] border-[3px] border-solid bg-[#fff] hover:bg-[#eff8ff] hover:cursor-pointer hover:border-[#0130b7] 2xs-l:mb-auto 2xs-l:mx-auto'])[1]").click()
    await page.locator("//div[contains(@class,'w-full text-center m-auto')]").click();
    await page.locator("//input[@id='fullName']").fill(fullNameField);
    await page.locator("//input[@id='email']").fill(emailField);
    await page.locator("//input[@id='password']").fill(passwordField);
    await page.locator("//input[@id='repeatPassword']").fill(repeatPasswordField);
    await page.locator("//textarea[@id='description']").fill(description);
    await page.locator("//button[normalize-space()='Complete Registration']").click();
    await page.waitForTimeout(5000);

 

//Login as a vendor
    await page.goto('https://www.tradecopy.io/');
    await page.locator("(//*[name()='svg'][@role='img'])[2]").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill(emailField);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(passwordField);
    await page.waitForTimeout(3000);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);

    //create new strategy
    await page.locator("//span[@class='pl-0'][normalize-space()='Strategies']").click();
    await page.locator("//button[normalize-space()='Create Strategy']").click()
    await page.locator("//input[@id='name']").fill(strategyName)
    await page.locator("//input[@id='credit']").fill('00')
    await page.locator("(//div[@class='react-select__input-container css-19bb58m'])[1]").click()
    await page.click("text=Forex");
    await page.locator("(//div[@class='react-select__input-container css-19bb58m'])[2]").click()
    await page.click("text=High Freq.");
    await page.locator("(//div[@class='react-select__input-container css-19bb58m'])[3]").click()
    await page.click("text=USDJPY")
    await page.locator("//span[@class='m-auto']").click()

    //Sending signal through Manual trading
    await page.locator("(//span[@class='pl-0'][normalize-space()='Strategies'])[1]").click()
    await page.locator("(//h1[normalize-space()='10034'])[1]").click()
    await page.locator("(//button[normalize-space()='Manual Trading'])[1]").click()
    await page.locator("//button[normalize-space()='Buy']").click()
    await page.waitForTimeout(2000);
    await page.locator("//button[normalize-space()='Sell']").click()
    await page.waitForTimeout(2000);
    await page.locator("//button[normalize-space()='Reverse']").click()
    await page.waitForTimeout(2000);
    await page.locator("//button[normalize-space()='Exit']").click()
    await page.waitForTimeout(2000);

    //TC copier account Login   
    await page.goto('https://www.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//button[normalize-space()='Logout']").click()
    await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill(emailField2);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(passwordField);
    await page.waitForTimeout(3000);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);
 
 // set messenger & strategy subscription
    await page.locator("//span[@class='pl-0'][normalize-space()='Strategies']").click();
    await page.locator("//span[normalize-space()='Filters']").click()
    await page.locator("//input[@id='Name']").check()
    await page.locator("//input[@placeholder='Filter by Template Name']").fill(strategySearch)
    await page.locator("//button[normalize-space()='Done']").click()
    await page.locator("//body/div/div/section/div/div/div/div/div/section/div/div[@dir='ltr']/div[@role='tabpanel']/div/section/div[1]/a[1]/div[1]").click();
    await page.locator("//div[@class='space-y-4 pb-3']//div[1]//button[1]").click()
    await page.locator("//input[@placeholder='Enter email']").fill('sharmin.huq@aitrade.ai')
    await page.locator("//button[normalize-space()='Update']").click()
    await page.locator("//button[normalize-space()='Subscribe']").click();
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Launch']").click();
    await page.waitForTimeout(10000);

    //Login as a vendor
    await page.goto('https://www.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//button[normalize-space()='Logout']").click()
    await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill(emailField);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(passwordField);
    await page.waitForTimeout(3000);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);

    //Sending signal through Manual trading
    await page.locator("(//span[@class='pl-0'][normalize-space()='Strategies'])[1]").click()
    await page.locator("(//h1[normalize-space()='10034'])[1]").click()
    await page.locator("(//button[normalize-space()='Manual Trading'])[1]").click()
    await page.locator("//button[normalize-space()='Buy']").click()
    await page.waitForTimeout(2000);
    await page.locator("//button[normalize-space()='Sell']").click()
    await page.waitForTimeout(2000);
    await page.locator("//button[normalize-space()='Reverse']").click()
    await page.waitForTimeout(2000);
    await page.locator("//button[normalize-space()='Exit']").click()
    await page.waitForTimeout(2000);


    //Checking email signal is receiving or not
    await page.goto('https://webmail.migadu.com/');





});
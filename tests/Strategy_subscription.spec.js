const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
const { test, expect } = require('@playwright/test');
test('BD forget pass', async ({ page }) => {

    const fullNameField = "Sharmin Huq";
    const newAccountEmail = "sharmin.huq+new5@aitrade.ai";
    const emailField = "sharmin.huq+pv@aitrade.ai";
    const emailField2 = "sharmin.huq+Pc@aitrade.ai";
    const passwordField = "Bangladesh1#";
    const repeatPasswordField = "Bangladesh1#";
    const description = `As an experienced trader, I specialize in [mention your specific markets, like forex, stocks, crypto, etc.],
    leveraging insights and proven strategies to maximize growth and manage risk effectively.`;
    const strategyName = "pc1";
    const strategySearch = "pc";

    //TC register for subscriber

    await page.goto("https://www.tradecopy.io/");
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1) > svg:nth-child(1)").click();
    await page.locator("//div[contains(@class,'Main_url-query-button__8gH1s')]").click();
    await page.locator("(//div[@class='border-[#f7f7f7] shadow-2md w-[200px] h-40 text-center px-4 py-[13px] rounded-[28px] border-[3px] border-solid bg-[#fff] hover:bg-[#eff8ff] hover:cursor-pointer hover:border-[#0130b7] 2xs-l:m-auto'])[1]").click()
    await page.locator("//div[contains(@class,'w-full text-center m-auto')]").click()
    await page.locator("//input[@id='email']").fill(newAccountEmail);
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
    await page.waitForTimeout(3000);

   //TC copier account Login   
      await page.goto('https://www.tradecopy.io/');
      await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
      await page.locator("//div[normalize-space()='Login']").click();
      await page.locator("//input[@id='username']").fill(emailField2);
      await page.waitForSelector("//input[@id='password']");
      await page.locator("//input[@id='password']").fill(passwordField);
      await page.waitForTimeout(3000);
      await page.locator("//button[normalize-space()='Login']").click();
      await page.waitForTimeout(3000);
   
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
      await page.waitForTimeout(5000);





//TC Subscriber Login

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
   await page.waitForTimeout(3000);
   await page.locator("//span[@class='pl-0'][normalize-space()='Strategies']").click();
   await page.locator("//body/div/div/section/div/div/div/div/div/section/div/div[@dir='ltr']/div[@role='tabpanel']/div/section/div[1]/a[1]/div[1]").click();
   await page.locator("//button[normalize-space()='Subscribe']").click();
   await page.locator("//input[@id='check']").check();
   await page.locator("//button[normalize-space()='Launch']").click();
   await page.waitForTimeout(3000);
   await page.locator("//a[@class='text-gray-600 text-base font-medium hover:text-blue-600 hover:no-underline whitespace-nowrap'][normalize-space()='Strategies']").click();
   await page.locator("//body[1]/div[1]/div[4]/section[1]/div[2]/div[2]/div[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[2]/div[2]/section[1]/div[9]/a[1]/div[1]/div[2]").click();
   await page.locator("//button[normalize-space()='Subscribe']").click();
   await page.locator("//input[@id='check']").check();
   await page.locator("//button[normalize-space()='Launch']").click();
   await page.waitForTimeout(3000);

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
   await page.waitForTimeout(5000);


});
const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
const { test, expect } = require('@playwright/test');
test('BD forget pass', async ({ page }) => {

//TC Subscriber Login

await page.goto('https://www.tradecopy.io/');
await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
await page.locator("//div[normalize-space()='Login']").click();
await page.locator("//input[@id='username']").fill('sharmin.huq+pc@aitrade.ai');
await page.waitForSelector("//input[@id='password']");
await page.locator("//input[@id='password']").fill('Bangladesh1#');
await page.waitForTimeout(3000);
await page.locator("//button[normalize-space()='Login']").click();

await page.locator("//span[@class='pl-0'][normalize-space()='Strategies']").click();
await page.locator("//body/div/div/section/div/div/div/div/div/section/div/div[@dir='ltr']/div[@role='tabpanel']/div/section/div[1]/a[1]/div[1]").click();
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


});
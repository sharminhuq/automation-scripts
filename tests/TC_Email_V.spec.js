import { test, expect } from "@playwright/test";
import MailosaurClient from "mailosaur";
import dotenv from "dotenv";
dotenv.config();

// Initialize Mailosaur API key
const mailosaur = new MailosaurClient("SaIP4ZXBrmU61yRBrVnSAoPfoTa0ZQbA");

// Define Mailosaur server and dynamic email address
const serverId = "jqws3qxe";
const dynamicEmail = `sharmin.huq+${new Date().getTime()}@${serverId}.mailosaur.net`;

// Input variables for email and password
const userEmail = process.env.USER_EMAIL || "sharmin.huq+fast@jqws3qxe.mailosaur.net"; // Dynamic email input
const userEmail2 = process.env.USER_EMAIL || "sharmin.huq@aitrade.ai";
const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; // Dynamic password input

test.describe("Complete Mail Verification Flow", () => {
  test("Complete Signup and Verify Email", async ({ page }) => {
   
    await page.goto("https://www-develop.tradecopy.io/");
    await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1) > svg:nth-child(1)").click();
    await page.locator("//div[contains(@class,'Main_url-query-button__8gH1s')]").click();
    await page.locator("(//div[@class='border-[#f7f7f7] shadow-2md w-[200px] h-40 text-center px-4 py-[13px] rounded-[28px] border-[3px] border-solid bg-[#fff] hover:bg-[#eff8ff] hover:cursor-pointer hover:border-[#0130b7] 2xs-l:m-auto'])[1]").click()
    await page.locator("//div[contains(@class,'w-full text-center m-auto')]").click()
    await page.locator("//input[@id='email']").fill(`userEmail`);
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

    //Log in to Mailosaur
    await page.goto("https://mailosaur.com/app");
    await page.locator("//input[@id='email']").fill(userEmail2); // Dynamic user email
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//input[@id='password']").fill(userPassword); // Dynamic user password
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.locator("text=Go to inbox").click(); // "Go to email inbox" 
    await page.locator("//tbody/tr[1]/td[2]/div[1]").click();
    await page.locator("//a[normalize-space()='Verify Email']").click();
    await page.waitForTimeout(10000);

    //Complete Registration
    await page.locator("//input[@id='fullName']").fill("Sharmin Huq");
    await page.locator("//input[@id='password']").fill(userPassword); // Dynamic password
    await page.locator("//input[@id='repeatPassword']").fill(userPassword);
    await page.locator("//button[normalize-space()='Complete Registration']").click();

    await page.waitForTimeout(5000);

    //Log in with dynamic credentials
    await page.goto('https://www-develop.tradecopy.io/');
    await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
    await page.locator("//div[normalize-space()='Login']").click();
    await page.locator("//input[@id='username']").fill('userEmail');
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('userPassword');
    await page.waitForTimeout(3000);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);
    // Logout
    await page.locator("(//span[normalize-space()='Logout'])[1]").click()
    await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();



  });
});

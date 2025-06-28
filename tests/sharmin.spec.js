import { test, expect } from "@playwright/test";
import MailosaurClient from "mailosaur";


const mailosaur = new MailosaurClient("SaIP4ZXBrmU61yRBrVnSAoPfoTa0ZQbA");

const serverId = "jqws3qxe"; 
const emailAddress = `sharmin.huq+${new Date().getTime()}@${serverId}.mailosaur.net`; 

test.describe("Complete Mail Verification Flow", () => {
  test("Complete Signup and Verify Email", async ({ page }) => {
  
    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[contains(text(),'Pricing')])[1]").click();
    await page.locator("(//button[contains(text(),'Buy Now')])[2]").click();

    // Fill in the form with test details
    await page.locator("//input[@id='email']").fill(emailAddress); 
    await page.locator("//input[@id='cardName']").fill("Sharmin Huq");
    await page.locator("//input[@id='cardNumber']").fill("4242 4242 4242 4242");
    await page.locator("//input[@id='expiryDate']").fill("02/34");
    await page.locator("//input[@id='cvc']").fill("456");
    await page.click("(//div[@class='react-select__input-container css-ackcql'])[1]");
    await page.click("text=Bangladesh");
    await page.locator("//input[@id='city']").fill("Panthapath");
    await page.locator("//input[@id='state']").fill("Dhaka");
    await page.locator("//input[@id='postCode']").fill("34567");
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Confirm Payment']").click();
    await page.locator("(//button[@class='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 rounded-full mt-3'])[1]").click();

    const email = await mailosaur.messages.search({
      sentTo: emailAddress,
      limit: 1,
    });

    const verificationLink = email.items[0].html.body.match(/https?:\/\/[^\s]+/)[0];
    console.log("Verification Link:", verificationLink);

    await page.goto(verificationLink); 
    await page.waitForSelector('text=Your account has been verified', { timeout: 30000 });
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("//input[@id='username']").fill(emailAddress);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('Bangladesh1#');
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);
    await page.locator("(//span[@class='pl-2'])[1]").click();
    await page.locator("//button[contains(text(),'Logout')]").click();
    console.log('Email verification completed successfully!');
  });
});

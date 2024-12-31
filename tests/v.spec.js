import { test, expect } from "@playwright/test";
import MailosaurClient from "mailosaur";
import dotenv from "dotenv";
dotenv.config();

// Mailosaur API key & ServerID
const mailosaur = new MailosaurClient("SaIP4ZXBrmU61yRBrVnSAoPfoTa0ZQbA");
const serverId = "jqws3qxe";


const userEmail = process.env.USER_EMAIL || "sharmin.huq+two6@jqws3qxe.mailosaur.net"; 
const userEmail2 = process.env.USER_EMAIL || "sharmin.huq@aitrade.ai";// Dynamic user email
const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; // Dynamic user password

test.describe("Complete Mail Verification Flow", () => {
  test("Complete Signup and Verify Email", async ({ page }) => {
   
    //Sign Up
    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[contains(text(),'Pricing')])[1]").click();
    await page.locator("(//button[contains(text(),'Buy Now')])[2]").click();
    await page.locator("//input[@id='email']").fill(userEmail); 
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

    //Log in to Mailosaur
    await page.goto("https://mailosaur.com/app");
    await page.locator("//input[@id='email']").fill(userEmail2); 
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//input[@id='password']").fill(userPassword); 
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.locator("text=Go to inbox").click(); // "Go to email inbox" 
    await page.locator("//tbody/tr[1]/td[2]/div[1]").click();
    await page.locator("//a[normalize-space()='Verify Email']").click();
    await page.waitForTimeout(10000);

    //Complete Registration
    await page.locator("(//input[@id='fullName'])[1]").fill("Sharmin Huq");
    await page.locator("//input[@id='password']").fill(userPassword); 
    await page.locator("//input[@id='repeatPassword']").fill(userPassword);
    await page.locator("//button[normalize-space()='Complete Registration']").click();
    await page.waitForTimeout(5000);

    //Log in with dynamic credentials
    await page.locator("(//input[@id='username'])[1]").fill(userEmail);
    await page.waitForSelector("(//input[@id='password'])[1]");
    await page.locator("(//input[@id='password'])[1]").fill(userPassword);
    await page.locator("(//button[normalize-space()='Login'])[1]").click();
    await page.waitForTimeout(10000);

    
   
  });
});

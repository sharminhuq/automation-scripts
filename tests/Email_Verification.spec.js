require('dotenv').config();
const mailosureApiKey = process.env.MAILOSURE_API_KEY;
const { chromium } = require('playwright');
const fetch = require('node-fetch');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Set to false for debugging
  const page = await browser.newPage();

  const timestamp = Date.now();
  const inboxEmail = `sharmin.huq+${timestamp}@aitrade.ai`;
  let verificationLink;

  try {
    // Step 1: Fill payment form
    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[contains(text(),'Pricing')])[1]").click();
    await page.locator("//div[@id='Futures1']//button[normalize-space()='Buy Now']").click();
    await page.locator("//input[@id='email']").fill(inboxEmail);
    await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
    await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242'); // Test card
    await page.locator("//input[@id='expiryDate']").fill('02/34'); // Expiry
    await page.locator("//input[@id='cvc']").fill('456'); // CVC
    await page.locator("//div[@class='react-select__input-container']").click();
    await page.click('text=Australia');
    await page.locator("//input[@id='city']").fill('Panthapath');
    await page.locator("//input[@id='state']").fill('Dhaka');
    await page.locator("//input[@id='postCode']").fill('34567');
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Confirm Payment']").click();

    await page.waitForTimeout(10000); // Wait for processing
    console.log(`Payment initiated with email: ${inboxEmail}`);

    // Step 2: Fetch verification email using Mailosure API
    console.log("Waiting for verification email...");
    for (let i = 0; i < 10; i++) {
      try {
        const response = await fetch(`https://api.mailosure.in/inbox?email=${inboxEmail}`, {
          headers: { Authorization: `Bearer ${mailosureApiKey}` },
        });

        if (!response.ok) {
          console.error("Failed to fetch email. Status:", response.status, response.statusText);
          continue;
        }

        const emails = await response.json();
        console.log("Emails fetched:", emails);

        if (Array.isArray(emails) && emails.length > 0) {
          const verificationEmail = emails.find((email) => email.subject.includes('Verify'));
          if (verificationEmail) {
            console.log("Email body:", verificationEmail.body);
            const match = verificationEmail.body.match(/https:\/\/www-develop\.backtestdata\.com\/verify\?token=\S+/);
            if (match) {
              verificationLink = match[0];
              break;
            } else {
              console.error("Verification link not found in email body.");
            }
          }
        } else {
          console.log("No verification email received yet. Retrying...");
        }
      } catch (error) {
        console.error('Error fetching email:', error);
      }
      await new Promise((r) => setTimeout(r, 5000)); // Wait 5 seconds before retrying
    }

    // Step 3: Navigate to verification link
    if (verificationLink) {
      console.log(`Verification link found: ${verificationLink}`);
      await page.goto(verificationLink);
      console.log("Email verified successfully!");
    } else {
      console.error("Verification email not received within the time limit.");
    }
  } catch (err) {
    console.error("An error occurred during execution:", err);
  } finally {
    await browser.close();
  }
})();

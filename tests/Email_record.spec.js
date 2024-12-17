import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www-develop.backtestdata.com/');
  await page.getByRole('navigation').locator('div').filter({ hasText: 'Pricing' }).click();
  await page.locator('div:nth-child(3) > .flex > div > .inline-flex').first().click();
  await page.getByPlaceholder('name@mail.com').click();
  await page.getByPlaceholder('name@mail.com').fill('sharmin.huq+thak@jqws3qxe.mailosaur.net');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Sharmin Huq');
  await page.getByPlaceholder('0000 0000 0000').click();
  await page.getByPlaceholder('0000 0000 0000').fill('4242 4242 4242 4242');
  await page.getByPlaceholder('MM / YY').fill('03 / 25');
  await page.getByPlaceholder('000', { exact: true }).fill('234');
  await page.locator('.react-select__input-container').click();
  await page.getByText('Bangladesh', { exact: true }).click();
  await page.getByPlaceholder('City Name').click();
  await page.getByPlaceholder('City Name').fill('Dhaka');
  await page.getByPlaceholder('State Name').click();
  await page.getByPlaceholder('State Name').fill('Dhaka');
  await page.getByPlaceholder('Post Code').click();
  await page.getByPlaceholder('Post Code').fill('234567');
  await page.getByLabel('I agree to the Terms of').check();
  await page.getByRole('button', { name: 'Confirm Payment' }).click();
  await page.goto('https://www-develop.backtestdata.com/pricing/?type=cryptocurrencies2&checkout=%22We+have+sent+you+an+e-mail+to+verify+your+account%21%22');
  await page.locator('section').filter({ hasText: 'Payment SuccessWe have sent' }).getByRole('button').click();

  // Step 2: Click on the "Go to inbox" button in Mailosaur
  await page.goto('https://mailosaur.com/app');
  await page.locator("//input[@id='email']").fill('sharmin.huq@aitrade.ai');
  await page.locator("//button[normalize-space()='Continue']").click();
  await page.locator("//input[@id='password']").fill("Bangladesh1#");
  await page.locator("//button[normalize-space()='Log in']").click();
  await page.locator('text=Go to inbox').click(); // Assuming "Go to inbox" is visible as text
  await page.locator("//tbody/tr[1]/td[2]/div[1]").click();
  await page.locator("//a[normalize-space()='Verify Email']").click();

  await page1.getByPlaceholder('Full Name').click();
  await page1.getByPlaceholder('Full Name').fill('Sharmin Huq');
  await page1.getByLabel('Confirm Password').click();
  await page1.getByLabel('Confirm Password').fill('Bangladesh1#');
  await page1.getByRole('textbox', { name: '*********' }).click();
  await page1.getByRole('textbox', { name: '*********' }).fill('Bangladesh1#');
  await page1.getByRole('button', { name: 'Complete Registration' }).click();
  await page1.getByPlaceholder('name@mail.com').click();
  await page1.getByPlaceholder('name@mail.com').fill('https://www-develop.backtestdata.com/register/update/YS85elhpT3lFVWlOQmJoNk9JSWpESnFWZU5rQVVkZ3NoQVhrb2F5Y1R6REppUWlXMnB3Z0ZJSEJtRmdDNTQyQXRCUUJVdFRNNmxrdDhnbzRqT0lteFBqK2VEaTV1UkZrNkpnTm5LcXZRWUl1TGtGZVA4UTV2WERmQlZPTlhpdmI=/');
  await page1.getByPlaceholder('name@mail.com').click();
  await page1.getByPlaceholder('name@mail.com').fill('httpswwwdevelop.backtestdata.comregisterupdateYS85elhpT3lFVWlOQmJoNk9JSWpESnFWZU5rQVVkZ3NoQTV2WERmQlZPTlhpdmI');
  await page1.getByPlaceholder('name@mail.com').fill('sharmin.huq+thak@jqws3qxe.mailosaur.net');
  await page1.getByPlaceholder('*********').click();
  await page1.getByPlaceholder('*********').fill('Bangladesh1#');
  await page1.getByRole('button', { name: 'Login' }).click();
});
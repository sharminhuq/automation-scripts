import { test, expect } from '@playwright/test';

const userEmail = process.env.USER_EMAIL || "sharmin.huq+nochk@aitrade.ai"; // Dynamic email input
const userPassword = process.env.USER_PASSWORD || "Bangladesh1##"; // Dynamic password input

test('test', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www-develop.backtestdata.com/');
  
  // Open the login modal
  await page.getByRole('banner').getByRole('button').click();
  await page.locator('a').filter({ hasText: 'Login' }).click();
  
  // Perform login with first account
  await page.getByPlaceholder('name@mail.com').fill(userEmail);
  await page.locator('input[name="password"]').fill(userPassword);
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Purchase process
  await page.getByRole('button', { name: 'Buy Now' }).first().click();
  await page.getByPlaceholder('Full Name').fill('Sharmin Huq');
  await page.getByPlaceholder('0000 0000 0000').fill('4242 4242 4242 4242');
  await page.getByPlaceholder('MM / YY').fill('03 / 27');
  await page.getByPlaceholder('000').fill('234');
  await page.getByText('Armenia').click();
  await page.getByPlaceholder('City Name').fill('Dhaka');
  await page.getByPlaceholder('State Name').fill('Dhaka');
  await page.getByPlaceholder('Post Code').fill('23456');
  await page.getByLabel('I agree to the Terms of').check();
  await page.getByRole('button', { name: 'Subscribe' }).click();

  // Navigate to transactions and purchase section
  await page.goto('https://customer-develop.backtestdata.com/transactions/purchase/?sortOrder=desc&sortField=id');
  
  // Cancel subscription process
  await page.locator('a').filter({ hasText: 'Billing' }).click();
  await page.getByRole('button', { name: 'Cancel Subscription' }).first().click();
  await page.getByPlaceholder('Please enter the reason here').fill('I want to leave');
  await page.getByRole('button', { name: 'Cancel Subscription' }).click();
  
  // Update account details
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByLabel('Settings').locator('a').filter({ hasText: 'Security' }).click();
  await page.getByRole('textbox').fill('Sharmin Huq Snigdha');
  await page.getByRole('button', { name: 'Update' }).click();

  // Update password
  await page.getByRole('tab', { name: 'Password' }).click();
  await page.getByLabel('Current Password').fill('Bangladesh1#');
  await page.getByLabel('New Password').fill('Bangladesh1##');
  await page.getByRole('button', { name: 'Update' }).click();

  // Logout
  await page.getByRole('button', { name: 'Logout' }).click();
});

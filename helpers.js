const fs = require('fs');
const { expect } = require('@playwright/test');

async function login(page) {
  const env = JSON.parse(fs.readFileSync('env.json'));
  await page.goto(env.url);
  await page.fill('input[id="username"]', env.username);
  await page.fill('input[id="password"]', env.password);
  await page.click('button[type="submit"]');
  const header = await page.locator('xpath=//h1[text()="Web Application"]'); 
  await expect(header).toBeVisible();
}

module.exports = { login };
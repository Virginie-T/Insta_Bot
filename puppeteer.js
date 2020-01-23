const puppeteer = require('puppeteer');
const credentials = require('./credentials');

(async () => {
  const browser = await puppeteer.launch({
  	headless: false,
  	args: [
  		'--window-size=1920, 1080'
  	]
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login/');

  await page.waitFor(() => document.querySelectorAll('input').length)

  await page.type('[name=username]', credentials.username)
  await page.type('[name=password]', credentials.password)
  await page .evaluate(() => {
  	document.querySelector('.L3NKy').click()
  })

  await page.waitFor(4000)

  //await browser.close();
})();
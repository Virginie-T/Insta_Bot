const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
  	headless: false,
  	args: [
  		'--window-size=1920, 1080'
  	]
  });
  const page = await browser.newPage();
  page.setViewport({ height: 1080, width: 1920})
  await page.goto('https://instagram.com');
  await page.screenshot({path: 'instagram.png'});

  await page.waitFor(4000)

  await browser.close();
})();
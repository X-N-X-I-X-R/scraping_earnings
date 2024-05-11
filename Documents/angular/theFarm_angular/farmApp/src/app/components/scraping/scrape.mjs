// server.js
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
app.get('/news', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.marketwatch.com/livecoverage/stock-market-today-dow-futures-decline-as-another-ai-play-slips-after-earnings/?mod=home-page');
  const data = await page.evaluate(() => {
    const titleElement = document.querySelector('div');
    const contentElement = document.querySelector('main');
    const title = titleElement ? titleElement.innerText : '';
    const content = contentElement ? contentElement.innerText : '';
    return { title, content };
  });
  await browser.close();
  res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
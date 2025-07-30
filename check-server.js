const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('Checking if server is running...');
    await page.goto('http://localhost:3000', { timeout: 5000 });
    console.log('Server is running!');
    
    // Take a screenshot
    await page.screenshot({ path: 'server-check.png' });
    console.log('Screenshot saved as server-check.png');
    
    // Get page title
    const title = await page.title();
    console.log('Page title:', title);
    
  } catch (error) {
    console.log('Server is NOT running or there was an error:', error.message);
  }
  
  await browser.close();
})();
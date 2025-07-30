const { chromium } = require('playwright');

async function takeScreenshot() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Set viewport to capture full design
    await page.setViewportSize({ width: 1440, height: 900 });
    
    await page.goto('file://' + __dirname + '/index.html');
    
    // Wait for map to load
    await page.waitForTimeout(2000);
    
    await page.screenshot({ path: 'current-design.png', fullPage: true });
    
    await browser.close();
    console.log('Screenshot saved as current-design.png');
}

takeScreenshot().catch(console.error);
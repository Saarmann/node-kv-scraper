import puppeteer from 'puppeteer';

async function runScraper(url, controlPrice) {
    const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
    })
    let page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'domcontentloaded',
    });

    let price = await page.$$('.col-1-4.t-1-2 .inner .object-article-details .grid .t-1-2.m-1-2 .object-price');

    for (const single of price) {
        const title = await page.evaluate(el => el.querySelector('strong').textContent, single)

        const rePrice = title.replace(/\s+/g, '');
        const finalPrice = rePrice.replace('€', '')

        if (parseInt(finalPrice) === controlPrice) {
            console.log('sama')
        } else {
            console.log('Uus hind lingil: ' + url)

        }
    }
    await page.close();
    await browser.close();
}

export default runScraper;
import cron from 'cron';
import runScraper from './scraper.js';
import { readFromGoogleSheets } from './server.js';

function handleCron() {
    new cron.CronJob(
        '0 */2 * * *',
        () => {
            comparePrices();
        },
        null,
        true,
        'Europe/Tallinn'
    )
};

async function comparePrices() {
    const realEstateData = await readFromGoogleSheets();

    realEstateData.map(e => {
        runScraper(e.link, e.price);
    })

}

handleCron();
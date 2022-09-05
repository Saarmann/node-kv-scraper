import cron from 'cron';
import { realEstateData } from './data.js';

async function runScraper(data) {
    data.forEach(element => {
        run(element.url, element.price);
    });
}

// runScraper(realEstateData);

function handleCron() {
    new cron.CronJob(
        '0 */5 * * * *',
        () => {
            console.log(
                `You will see this message every 5 minute ${new Date(
                    Date.now()
                ).toString()}`
            );
        },
        null,
        true,
        'Europe/Tallinn'
    )
};
import cron from 'cron';
import sendNotificationEmail from './email.js';
import runScraper from './scraper.js';
import { readFromGoogleSheets } from './server.js';

// runScraper(realEstateData);

// function handleCron() {
//     new cron.CronJob(
//         '0 */5 * * * *',
//         () => {
//             console.log(
//                 `You will see this message every 5 minute ${new Date(
//                     Date.now()
//                 ).toString()}`
//             );
//         },
//         null,
//         true,
//         'Europe/Tallinn'
//     )
// };

async function comparePrices() {
    const realEstateData = await readFromGoogleSheets();

    console.log(realEstateData);

    realEstateData.map(e => {
        runScraper(e.link, e.price);
    })

    //runScraper('https://www.kv.ee/muua-ideaalne-kodu-voi-investeering-hubases-palkma-3446658.html', 155000);
}

// comparePrices();

runScraper('https://www.kv.ee/helge-ja-ilus-korter-suureparane-asukoht-muugile-s-3447220.html', 185000);

// sendNotificationEmail('kaspar.saarmann@mail.ee', "test kiri");
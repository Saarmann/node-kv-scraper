import * as dotenv from 'dotenv'
dotenv.config()
import { google } from 'googleapis';

export async function getServerSideProps() {

    const auth = await new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = process.env.SHEET_ID;

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!A1:D13",
    });

    console.log(getRows.data.values.map(e => {
        console.log(e);
    }));
}

getServerSideProps();
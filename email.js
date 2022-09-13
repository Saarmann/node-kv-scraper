import * as dotenv from 'dotenv';
dotenv.config();
import sgMail from '@sendgrid/mail';

function sendNotificationEmail(email, message) {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    sgMail
        .send({
            to: email, // Change to your recipient
            from: email, // Change to your verified sender
            subject: 'KV hinnas on muutus',
            text: message,
        })
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        });
}

export default sendNotificationEmail;


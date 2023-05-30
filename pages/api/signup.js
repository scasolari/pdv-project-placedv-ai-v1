import axios from 'axios'
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import Email from "@/react-email-starter/emails";

export default async function (req, res){
    const { email } = req.body

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'info@placedv.com',
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    const emailHtml = render(<Email url="https://example.com" />);

    const email_options = {
        from: 'info@placedv.com',
        to: email,
        subject: 'Thank You for Subscribing to the Placedv AI Newsletter!',
        html: emailHtml,
    };

    if (!email || !email.length) {
        return res.status(400).json({ error: 'Email is required' })
    }
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const API_SERVER = process.env.MAILCHIMP_API_SERVER
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`
    const data = {
        email_address: email,
        status: 'subscribed'
    }
    const options = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `api_key ${API_KEY}`
        }
    }
    try {
        const response = await axios.post(url, data, options)
        if (response.status >= 400) {
            return res.status(400).json({
                error: `There was an error subscribing to the newsletter.`
            })
        }
        transporter.sendMail(email_options);
        return res.status(201).json({ message: 'success' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

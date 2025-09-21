import { createTransport } from "nodemailer";

export const transporter = createTransport({
    service: "smtp",
    host: process.env.HOST,
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
    },
    port: 465,
    // secure: false,
    tls: { rejectUnauthorized: false, }
});
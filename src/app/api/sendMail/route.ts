import { transporter } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const res = await transporter.sendMail({
            subject: "How are you bro",
            from: process.env.MAIL,
            to: "tony.sir1975@gmail.com",
            text: "This is your OTP.",
        })

        return NextResponse.json(res, { status: 201 });
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}
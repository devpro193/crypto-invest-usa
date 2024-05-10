import prisma from "@/util/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await prisma.user.findMany();

        return NextResponse.json(users, { status: 201 });
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}

export async function POST(req: Request) {
    try {

        const { email, fname, lname, phone, username, password } = await req.json();

        const post = await prisma.user.create({
            data: {
                email,
                fname,
                lname,
                phone,
                username,
                password
            }
        });

        return NextResponse.json(post, { status: 201 });
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}

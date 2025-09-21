import prisma from "@/util/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        const { username, password } = await req.json();

        const post = await prisma.user.findFirst({
            where: {
                username,
                password
            },
        });

        if (!post) throw { status: 404, message: "User not found" }

        return NextResponse.json({ post, user: true }, { status: 201 });
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message || err || "Database Error", { status: err.status || 500 });
    }
}

import next from "next";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({ message: "Logout successful" }, { status: 200 });
        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
        return response;

    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 })
    }
}
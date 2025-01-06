import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export default async function getDataFromToken(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value || "";
        const payLoad: any = await jwt.verify(token, process.env.JWT_SECRET!);
        return payLoad.id;
    }
    catch (error) {
        return NextResponse.json({ message: "Invalid token" }, { status: 400 });
    }

}
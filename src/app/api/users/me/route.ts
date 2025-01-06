import getDataFromToken from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db/db";


connect();
export async function GET(req: NextRequest) {
    try {
        const userId = await getDataFromToken(req);
        const user = await User.findById(userId);
        return NextResponse.json({ data: user });
    }
    catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}

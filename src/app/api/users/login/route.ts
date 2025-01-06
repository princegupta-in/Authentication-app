import { connect } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {

    try {
        const { email, password } = await req.json();
        // console.log(email, password)
        //check if user exists
        if (!email || !password) {
            return NextResponse.json({ message: "Please fill all fields" }, { status: 400 });
        }
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return NextResponse.json({ message: "User does not exist" }, { status: 400 });
        }
        //check if password is correct
        const validPassword = await bcryptjs.compare(password, existingUser.password);
        if (!validPassword) {
            return NextResponse.json({ message: "Invalid password" }, { status: 400 });
        }
        //create token
        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET!, { expiresIn: "1d" });
        //cookie
        const response = NextResponse.json({ message: "Login successful", token }, { status: 200 });
        response.cookies.set("token", token, { httpOnly: true, });
        return response;

    } catch (error) {
        console.log("error", error)
    }
} 
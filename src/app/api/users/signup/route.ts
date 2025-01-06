import { connect } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect();

export async function GET(req: NextRequest) {
    return NextResponse.json({ message: "Hello" });
    }

export async function POST(req: NextRequest) {
   try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    if (!username || !email || !password) {
      return NextResponse.json({ message: "Please fill all fields" }, { status: 400 });
    }
    console.log("line 19 route ",reqBody)
    //check if user already exists
    // const user = await User.findOne({email});
    // if(user){
    //     return NextResponse.json({ message: "User already exists" }, { status: 400 });
    // }
    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //create new user
    const newUser = await User.create({
        username,
        email,
        password:hashedPassword,
    });
    console.log("inside route",newUser)
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
   } catch (error:any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
    
   }
}
"use client"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from 'react-hot-toast';

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const onSignin = async () => {
        try {
            // console.log("user", user)
            const response = await axios.post("/api/users/login", user)
            // const response = await axios.get("/api/users/login")
            console.log("signin success", response.data.message)
            toast.success(response.data.message)
            router.push("/profile")
        }
        catch (error: any) {
            // console.log("signin failed:)", error.response.data.message)
            toast.error(error.response.data.message)
        }

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-1 border-2" >
            <div className="flex flex-col items-center justify-center p-5 gap-1 border-2" >
                <h1>Signin</h1>

                <label htmlFor="email">email</label>
                <input type="text" id="email" placeholder="email" className="text-black p-1" onChange={(e) => {
                    setUser({ ...user, email: e.target.value })
                }} />
                <label htmlFor="password">password</label>
                <input type="text" id="password" placeholder="password" className="text-black p-1" onChange={(e) => {
                    setUser({ ...user, password: e.target.value })
                }} />

                <button onClick={onSignin} className="border-2 p-2 rounded-2xl" >signin</button>
                <Link rel="stylesheet" href="/signup">go to signup page</Link>
                <Link rel="stylesheet" href="/">go to root page</Link>

            </div >
        </div >
    )
}
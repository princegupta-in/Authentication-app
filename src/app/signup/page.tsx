"use client"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from 'react-hot-toast';

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    })
    const [loading, setLoading] = useState(false)
    const onSignup = async () => {
        try {

            setLoading(true)
            const response = await axios.post("/api/users/signup", user)
            console.log("signup success", response)
            toast.success(response.data.message)
            router.push("/login")

        } catch (error: any) {
            // console.log("signup failed", error)
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-1 border-2" >
            <div className="flex flex-col items-center justify-center p-5 gap-1 border-2" >
                <h1>{loading ? "Processing..." : "Signup"}</h1>
                <label htmlFor="username">username</label>
                <input type="text" id="username" placeholder="username" className="text-black p-1" onChange={(e) => {
                    setUser({ ...user, username: e.target.value })
                }} />
                <label htmlFor="email">email</label>
                <input type="text" id="email" placeholder="email" className="text-black p-1" onChange={(e) => {
                    setUser({ ...user, email: e.target.value })
                }} />
                <label htmlFor="password">password</label>
                <input type="text" id="password" placeholder="password" className="text-black p-1" onChange={(e) => {
                    setUser({ ...user, password: e.target.value })
                }} />

                <button onClick={onSignup} className="border-2 p-2 rounded-2xl" >signup</button>
                <Link rel="stylesheet" href="/login">go to login page</Link>

            </div >
        </div >
    )
}
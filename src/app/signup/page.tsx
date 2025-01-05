"use client"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function SignupPage() {
    const [user,setUser]= useState({
        email:"",
        password:"",
        username:"",
    })
    const onSignup = ()=>{

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-1 border-2" >
        <div className="flex flex-col items-center justify-center p-5 gap-1 border-2" >
            <h1>Signup</h1>
            <label htmlFor="username">username</label>
            <input type="text" id="username" placeholder="username" onChange={(e)=>{
                setUser({...user,username: e.target.value})
            }} />
            <label htmlFor="email">email</label>
            <input type="text" id="email" placeholder="email" onChange={(e)=>{
                setUser({...user,email: e.target.value})
            }} />
            <label htmlFor="password">password</label>
            <input type="text" id="password" placeholder="password" onChange={(e)=>{
                setUser({...user,password: e.target.value})
            }} />

            <button onClick={onSignup} className="border-2 p-2 rounded-2xl" >signup</button>
            <Link rel="stylesheet" href="/login">go to login page</Link>

    </div >
    </div >
    )
}
"use client"
import toast from 'react-hot-toast';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function profilePage() {
    const router = useRouter();
    const [data,setData] = useState("nothing ")
    function toastme() {
        toast("love", { icon: '❤️' });
    }

    const logout = async () => {
        try {
           await axios.get("/api/users/logout")
            toast.success("logout success")
            router.push("/login")
        } catch (error: any) {
            toast.error("logout failed")
        }
    }
const getUserDetails = async ()=>{
    const res = await axios.get("/api/users/me")
    console.log(res.data.data)
    setData(res.data.data.email)
}

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-1 border-2" >
            <h1>Profile Page</h1>
            <h2>{data === "nothing" ? "Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <button className=" py-1 px-2 rounded-2xl bg-red-500 font-bold" onClick={toastme} >love me</button>
            <button className=" py-2 px-5 rounded bg-blue-500 font-bold" onClick={getUserDetails} >getUserDetails</button>
            <button onClick={logout} className='py-2 px-5 rounded bg-purple-600 font-bold'>logout</button>
        </div>
    )
}

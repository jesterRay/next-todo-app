"use client"

import Input from "@components/ui/Input"
import Button from "@components/ui/Button"
import Image from "next/image"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Toaster, toast } from 'sonner'

import {AUTH_USER_QUERY} from '@queries/userQueries'
import { useLazyQuery } from '@apollo/client'

const SignupForm = () => {

    const router = useRouter()
    const [authUser,{loading,error,data}] = useLazyQuery(AUTH_USER_QUERY("user{_id,name,email},token"));
    const handleFormSubmit = async (e: FormData)=>{
        const email = e.get('email') as string;
        const password = e.get('password') as string;

        if(!email  || !password )
            return toast.error("Fill All the Fields");

        toast.info("seding Request");
        
        try {
            const res = await authUser({variables:{email,password}});
            
            if(res?.data?.authUser){
                const {user,token} = res.data.authUser;
                localStorage.setItem('token',token);
                toast.success(`Welcome, ${user.name}`);
                router.push('/todo');
            }else if(error){
                throw new Error(error.message);
            }
            
        } catch (err: any) {
            toast.error(err.message || "An unexpected error occurred");
            console.error(err);
        }



    }


  return (
    <form action={handleFormSubmit} className=" max-w-screen-md flex flex-col items-center gap-6 rounded-lg shadow-lg sm:px-12 px-4 py-8 bg-white">
        <Toaster position="top-right" richColors  />
        <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
                layout={"fill"}
                alt={"logo"}
                src={'/assets/images/logo/svg/todo-hive-favicon-color(2).svg'}
            />
        </div>
        <h3 className=" lg:text-2xl md:text-xl sm:text-lg text-base font-medium text-center text-blue-800 pb-6 ">
            Login To Check Your Life
        </h3>
        <div className="flex flex-col md:flex-row gap-6">
            <Input name={"email"} type={"email"} text={"Email"} autoFocus={true}/>
            <Input name={"password"} type={"password"} text={"Password"} />
        </div>
        <div className="pb-4">
            <Button type={"submit"} text={"Login"}/>
        </div>
    </form>
  )
}

export default SignupForm

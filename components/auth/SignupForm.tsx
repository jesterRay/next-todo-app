"use client"

import Input from "@components/ui/Input"
import Button from "@components/ui/Button"
import Image from "next/image"
import Logo from "@public/assets/images/logo/svg/todo-hive-favicon-color(2).svg"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Toaster, toast } from 'sonner'


import comparePassword from "@utils/comparePassword"
import validatePasswordStrength from "@utils/validatePasswordStrength"

import {useMutation} from '@apollo/client'
import { CREATE_USER_QUERY } from "@queries/userQueries"



const SignupForm = () => {

    const router = useRouter();
    const [createUser, {loading,error,data}] = useMutation(CREATE_USER_QUERY('name,email'));
    const handleFormSubmit = async (e: FormData)=>{

        const user = {
            name: e.get('username') as string,
            email: e.get('email') as string,
            password: e.get('password') as string
        }

        const confirmPassword = e.get('confirm_password') as string; 
        if(!user.name  || !user.email  || !user.password  || !confirmPassword)
            return toast.error("Fill All the Fields");
        if(!comparePassword(user.password,confirmPassword))
            return toast.error("Password and Confrim password should be same");
        const {valid,messages} = validatePasswordStrength(user.password);
        if(!valid)
            return toast.error(messages.join(' '));

        toast.info("sending request");
        try{
            const res = await createUser({variables: {user}});
            if(res.data){
                toast.success('Welcome,',res.data.createUser.name);
                router.push('/login');
            }
        }catch(err:any){
            toast.error(err.message)
            console.log(err);
        }     
    }


  return (
    <form action={handleFormSubmit} className=" max-w-screen-md flex flex-col items-center gap-6 rounded-lg shadow-lg sm:px-12 px-4 py-8 bg-white">
        <Toaster position="top-right" richColors  />
        <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
                layout={"fill"}
                alt={"logo"}
                src={Logo}
            />
        </div>
        <h3 className=" lg:text-2xl md:text-xl sm:text-lg text-base font-medium text-center text-blue-800 pb-6 ">
            Register Yourself to Keep Track of Your Life
        </h3>
        <div className="flex flex-col md:flex-row gap-6">
            <Input name={'username'} type={"text"} text={"Name"} autoFocus={true}/>
            <Input name={"email"} type={"email"} text={"Email"}/>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
            <Input name={"password"} type={"password"} text={"Password"} />
            <Input name={"confirm_password"} type={"password"} text={"Confirm Password"}/> 
        </div>
        <div className="pb-4">
            <Button type={"submit"} text={"Register"}/>
        </div>
    </form>
  )
}

export default SignupForm

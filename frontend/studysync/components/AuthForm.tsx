"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Button from "./ui/Button";
import { GoogleLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";

const AuthForm = ({ mode }: { mode: string | string[] | undefined }) => {

    const searchParams = useSearchParams();
    const pathname = usePathname();

   const currentMode = searchParams.get('mode') || mode;

    const handleSubmit = () => {
        event?.preventDefault();
    }

  return (
    <form 
    onSubmit={() => handleSubmit()}
    className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] p-8 border-0 md:border md:border-solid md:border-primary md:rounded-md shadow-lg">
        {currentMode === "login"? (
            <LoginForm />
        ): 
            <SignupForm />
        }

        <div className="flex flex-col p-1 items-center"> 
            OR 
        </div>
        <div className="flex flex-col p-1 my-2.5 items-center">  
        <Button
            type="sec-form-button"
         >
            <GoogleLogoIcon weight="bold" />
             Sign In with Google 
         </Button>
         
         </div>


        <div className="flex flex-col p-1 my-2.5 items-center">

            <span>
            {currentMode === "login"? "New to StudySync?  ": "Already have an account?  "}
            <Link href={currentMode === "login"? "/signin?mode=signup": "/signin?mode=login"} className="text-primary underline">
                <span
                  className="font-bold text-primary cursor-pointer hover:text-primary/70"
                  >
                   {currentMode === "login"? "Create an account": "Log in"}
                </span>
            </Link>
            </span>

        </div>

        
    </form>
  )
}

export default AuthForm
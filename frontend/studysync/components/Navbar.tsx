'use client'
import Link from "next/link"
import dynamic from 'next/dynamic'
import Button from "./ui/Button"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false })

const Navbar = () => {


  const pathname = usePathname();

  if (pathname === "/signin" || pathname === "/dev") return null;
  return (
    <nav className='p-3 bg-black/10 backdrop-blur-lg flex flex-row justify-between sticky top-0'>
      <div className="flex flex-row items-center">
        <a href="localhost:3000">
        <h2 className='font-logo text-2xl font-extrabold pl-7 cursor-pointer'>
            StudySync
        </h2>
        </a>
        </div>

        <div className="flex flex-row items-center px-10 gap-3">
        <p className="font-light">Already have an account?</p>
        <Link href={"/signin"}>
          <Button 
            type="primary"
            onClick={() => {}}
        >Login</Button>
          </Link>

        <ThemeToggle />
        </div>

        

    </nav>
  )
}

export default Navbar
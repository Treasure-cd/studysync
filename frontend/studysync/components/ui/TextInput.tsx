"use client"

import { EyeIcon, EyeClosedIcon } from "@phosphor-icons/react";
import { useState } from "react";
interface TextInputProps {
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    isValid?: boolean;
    placeholder: string;
    errorText?: string | null;
    showPasswordToggle?: boolean;
}
const TextInput = ({ type = "text", onChange, value, placeholder, isValid = true, errorText, showPasswordToggle = false }: TextInputProps) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const borderClass = !isValid 
    ? "focus:border-red-600" 
    : "border-primary/40 focus:border-primary/80";


    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible);
        console.log(isPasswordVisible)
    }
  return (
    <>
    <div className="flex relative justify-center">
        <input 
        type={showPasswordToggle? (isPasswordVisible? "text": "password"): "text"}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`w-full py-1 px-2 bg-inputbg border border-solid border-primary/40 focus:outline-none focus:border-primary/80 focus:border-2 rounded-sm ${borderClass}`}
        />
        {showPasswordToggle && (
            isPasswordVisible?
            <EyeClosedIcon
            className="ml-1.5 absolute right-2 top-1.5 text-foreground hover:text-foreground/75 cursor-pointer transition duration-300 ease-in-out" 
             strokeWidth={1.5} 
             size={"20px"}
             onClick={togglePasswordVisibility}
             /> :
            <EyeIcon className="ml-1.5 absolute right-2 top-1.5 text-foreground hover:text-foreground/75 cursor-pointer transition duration-300 ease-in-out" 
             strokeWidth={1.5} 
             size={"20px"}
             onClick={togglePasswordVisibility}
             />
        )}
    </div>

    {!isValid && errorText && (
        <span className="text-xs text-red-500 mt-1">
            {errorText}
        </span>
    )}
    
</>
  )
}

export default TextInput
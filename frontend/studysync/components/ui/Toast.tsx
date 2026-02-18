"use client"

import { CheckCircleIcon, XCircleIcon, WarningCircleIcon } from "@phosphor-icons/react";
import { useToast } from "@/hooks/useToast";

const Toast = () => {

  const { isShowing, message, iconType } = useToast();
  return (
    <div className={`
            fixed bottom-6 right-6
            inline-flex justify-center p-3 items-center
            font-semibold bg-gray-800 rounded-lg
            border border-primary/50
            transition-all duration-500
            ${isShowing
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"}
          `}>
        <div className="flex justify-center">
        {iconType === "good"?
        <CheckCircleIcon weight="bold" size={"30px"} className="text-green-700" />:
        iconType === "warning"?
        <WarningCircleIcon weight="bold" size={"30px"} className="text-yellow-600" />:
         <XCircleIcon weight="bold" size={"30px"} className=" text-red-600" />
        }            
        </div>

        <span className="ml-3">{message}</span>  

    </div>
  )
}


export default Toast
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    type: "primary" | "secondary" | "destructive" | "form-button" | "sec-form-button";
    onClick?: () => void;
    disabled?: boolean;
}

const Button = ({ children, type, onClick, disabled = false }: ButtonProps) => {
    const baseStyle = `drop-shadow-sm font-bold rounded-lg py-2 px-7 cursor-pointer transition duration-300 ease-in-out ${!disabled && "active:scale-95"} flex items-center justify-center disabled:bg-primary/50 disabled:cursor-not-allowed`;

    const typeStyles = {
        primary: "text-white bg-primary hover:opacity-80",
        secondary: "text-primary bg-lightbackground border border-primary hover:bg-primary/5",
        destructive: "text-white bg-red-700 hover:bg-red-800",
        "form-button": "text-white bg-primary hover:opacity-80 w-full",
        "sec-form-button": "text-primary bg-lightbackground border border-primary hover:bg-primary/5 w-full"
       
    };

    return (
        <button 
            onClick={onClick} 
            className={`${baseStyle} ${typeStyles[type]}`}
            disabled={disabled}
        >
            <span className="font-medium flex items-center gap-2.5">{children}</span>
        </button>
    );
};

export default Button;
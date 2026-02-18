import React, { useState, useRef } from 'react';

type ToastContextType = {
  isShowing: boolean;
  message: string;
  iconType: "good" | "bad" | "warning";
  showToast: (message: string, icon: "good" | "bad" | "warning") => void;
};

export const ToastContext = React.createContext<ToastContextType | undefined>(undefined);


const ToastProvider = ({ children }:  { children: React.ReactNode }) => {

    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const [isShowing, setIsShowing] = useState(false);
    const [message, setMessage] = useState("");
    const [iconType, setIconType] = useState<"good" | "bad" | "warning">("good");
    

    function showToast(newMessage: string, icon: "good" | "bad" | "warning") {
      setMessage(newMessage);
      setIconType(icon);
      setIsShowing(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsShowing(false);
      }, 2000);
    }
      return (
    <ToastContext.Provider
      value={{
        isShowing,
        message,
        showToast,
        iconType,
      }}
    >
        {children}
    </ToastContext.Provider>
  );
};


export default ToastProvider;
"use client";

import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/context/ToastProvider";
import { AuthProvider } from "@/context/AuthProvider";
import { User } from "./types/userType";


export function Providers({ children, user }: { children: React.ReactNode, user: User | null }) {
  return (
    <AuthProvider initialUser={user}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ToastProvider>
      {children}        
      </ToastProvider>

    </ThemeProvider>
    </AuthProvider>
  );
}

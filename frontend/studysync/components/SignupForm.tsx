"use client"

import TextInput from "./ui/TextInput";
import Button from "./ui/Button";
import { useState, useEffect } from "react";
import { SignInIcon } from "@phosphor-icons/react";

const SignupForm = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailError, setEmailError] = useState<string | null>("");
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [usernameError, setUsernameError] = useState<string | null>("");
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [passwordError, setPasswordError] = useState<string | null>("");


    const validateEmail = (email: string): string | null => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
      if (!regex.test(email)) return "Email is invalid"
      return null;

    }

    const validateUsername = (username: string): string | null => {
      if (username.trim().length < 3) return "Email or username must be 3 characters or longer"

      return null;

    }


    const validatePassword = (password: string): string | null => {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
      if (!regex.test(password)) {
        if (password.trim().length < 8) return "Password must be more than 8 characters";
        if (!/\d/.test(password)) return "Password must contain at least one digit";
        if (!/@$!%*#?&/.test(password)) return "Password must contain at least one special character";
        
      }
      return null;
    }


    useEffect(() => {
      const emailValid = validateEmail(email);
      const usernameValid = validateUsername(username)
      const passwordValid = validatePassword(password);

      setEmailError(emailValid);
      setUsernameError(usernameValid)
      setPasswordError(passwordValid);

      setIsEmailValid(emailValid === null);
      setIsUsernameValid(usernameValid === null);
      setIsPasswordValid(passwordValid === null);
    }, [email, username, password])

  return (
    <>
         <div className="flex flex-col p-1 mb-2">
          <label className="mb-1">Your Email</label>
          <TextInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            isValid={isEmailValid}
            errorText={emailError}

          />  
        </div>
        <div className="flex flex-col p-1 mb-2">
          <label className="mb-1">What would you like us to call you?</label>
          <TextInput
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            isValid={isUsernameValid}
            errorText={usernameError}

          />  
        </div>
        <div className="flex flex-col p-1">
          <label className="mb-1">Your Password</label>
          <TextInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            showPasswordToggle
            isValid={isPasswordValid}
            errorText={passwordError}
           />  
        </div>
        <div className="flex flex-col p-1 my-2.5 items-center">  
        <Button
            type="form-button"
            disabled={!isEmailValid || !isPasswordValid || !isUsernameValid}
         >
          Sign Up <SignInIcon />
         </Button>
         </div>
    </>
  )
}

export default SignupForm
"use client"
import TextInput from "./ui/TextInput"
import Button from "./ui/Button"
import { useState, useEffect } from "react"
import { SignInIcon } from "@phosphor-icons/react"


const LoginForm = () => {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [isIdentifierValid, setIsIdentifierValid] = useState(false);
    const [identifierError, setIdentifierError] = useState<string | null>("");
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [passwordError, setPasswordError] = useState<string | null>("");


    const validateIdentifier = (identifier: string): string | null => {
      const regex = /^[A-Za-z0-9._%+-@]{3,}$/;
      
      if (identifier.trim().length < 3 && !regex.test(identifier)) {
          return "Email or username must be 3 characters or longer"
      }

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
      const identifierValid = validateIdentifier(identifier);
      const passwordValid = validatePassword(password);

      setIdentifierError(identifierValid);
      setPasswordError(passwordValid);

      setIsIdentifierValid(identifierValid === null);
      setIsPasswordValid(passwordValid === null);
    }, [identifier, password])


  return (
    <>
         <div className="flex flex-col p-1 mb-2">
          <label className="mb-1">Your Email or Username</label>
          <TextInput
            type="email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Enter your email or username"
            isValid={isIdentifierValid}
            errorText={identifierError}

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
            disabled={!isPasswordValid || !isIdentifierValid}
         >
          Login <SignInIcon />
         </Button>
         </div>

    </>
  )
}

export default LoginForm
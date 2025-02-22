import { useState } from "react";
import { getValidationMessage, } from "../signup/Validation";




export const useSignUp = () => {
  
 const [signUpForm, setSignUpForm] = useState({
    id: "",
    password: "",
    nickname : "",
  })

  const [authMessage, setAuthMessage] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleAuthvalidation = (e) => {
    const { name, value } = e.target;
    console.log("name ---> ", name)
    console.log("value ---> ", value)
    setSignUpForm((prev) => ({ ...prev, [name]: value })) 
    setAuthMessage((message)=>({...message, [name] : getValidationMessage(name, value)}))
  }

  return {signUpForm, authMessage, handleAuthvalidation}
}
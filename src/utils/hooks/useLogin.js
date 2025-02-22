import { useState } from "react";
import { getValidationMessage } from "../signup/Validation";



export const useLogin = () => {
  const [loginForm, setLoginForm] = useState({ id: "", password: "" });
  const [loginErrorMessage, setLoginErrorMessage] = useState({
    id: "",
    password: "",
  });

  const handleAuthvalidation = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }))
    setLoginErrorMessage((message) => ({ ...message, [name]: getValidationMessage(name, value) }))
  }

  return { loginForm, loginErrorMessage, handleAuthvalidation }
}
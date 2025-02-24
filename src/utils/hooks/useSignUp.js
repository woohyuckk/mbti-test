import { useState } from "react";
import { getValidationMessage, } from "../auth/Validation";
import { useSignUpMutate } from "./useAuth.api";

export const useSignUp = () => {

  const { mutate: signUpMutate } = useSignUpMutate();
  const [signUpForm, setSignUpForm] = useState({
    id: "",
    password: "",
    nickname: "",
  })

  const [authMessage, setAuthMessage] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleAuthvalidation = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value }))
    setAuthMessage((message) => ({ ...message, [name]: getValidationMessage(name, value) }))
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signUpMutate(signUpForm)
  };

  return { signUpForm, authMessage, handleAuthvalidation,handleSignupSubmit }
}
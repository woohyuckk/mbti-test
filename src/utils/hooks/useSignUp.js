import { useState } from "react";
import { getValidationMessage, } from "../auth/Validation";
import { useSignUpMutate } from "./useAuth.api";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();
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
    signUpMutate(signUpForm, {    onSuccess: () => {
      alert("회원가입 완료");
      navigate('/login')
    },
    onError: (e) => {
      alert(e.message);
    }
      
    })
  };

  return { signUpForm, authMessage, handleAuthvalidation,handleSignupSubmit }
}
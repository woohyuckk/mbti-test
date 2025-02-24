import { useState } from "react";
import { getValidationMessage, } from "../auth/Validation";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";

export const useSignUp = () => {

  const navigate = useNavigate();

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

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, success } = await register(signUpForm);
      // 회원가입 API 호출 또는 추가 로직 처리
      if (success) {
        alert(message);
        navigate('/login')
      }
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
    }
  };

  return { signUpForm, authMessage, handleAuthvalidation,handleSignupSubmit }
}
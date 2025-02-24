import { useMutation } from "@tanstack/react-query";
import { register } from "../../api/auth";
import { useNavigate } from "react-router-dom";




export function useSignUpMutate() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (signUpForm) => await register(signUpForm),
    onSuccess: () => {
      alert("회원가입 완료");
      navigate('/login')
    },
    onError: (e) => {
      alert(e.message);
    }
  })
}
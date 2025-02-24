import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserProfile, login, register } from "../../api/auth";
import useAuthStore from "../../store/authStore";




export function useSignUpMutate() {
  
  return useMutation({
    mutationFn: async (signUpForm) => await register(signUpForm)
  })
}

export function useLoginMutate() {
  const setUserInfo = useAuthStore().setUserInfo

  return useMutation({
    mutationFn: async (loginForm) => {
      const response = await login(loginForm)
      return response
    },
    onSuccess: (response) => {
      const {accessToken:token} = response
      setUserInfo({...response, token})
    }
  })

}

export function useProfileQuery() {
  return useQuery({
    queryKey: ["myInfo"],
    queryFn:getUserProfile
  })
}
import { create } from "zustand"
import { persist } from "zustand/middleware"


const useAuthStore = create(persist((set) => {
  return {
    token: "",
    isAuthnticated: false,
    nickname: "",
    userId: "",
    signin: (payload) => {
      set({
        token: payload.token,
        isAuthnticated: payload.isAuthnticated,
        nickname: payload.nickname,
        userId: payload.userId
      }
      )
    },
    logout: () => {
      set({
        token: "",
        isAuthnticated: false
      })
    }
  }
}, {
  name: "user"
}))

export default useAuthStore
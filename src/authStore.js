import { create } from "zustand"
import { persist } from "zustand/middleware"


const useAuthStore = create(persist((set) => {
  return {
    token: "",
    isAuthtication: false,

    login: (payload) => {
      set({
        token: payload
      }
      )
    },
    logout: () => {
      set({
        token : ""
      })
    }
  }
}, {
  name: "user"
}))

export default useAuthStore
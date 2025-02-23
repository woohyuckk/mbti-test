import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"


const initialValue = {
  token: "",
  isAuthnticated: false,
  nickname: "",
  userId: "",
  avatar: "",
}

const useAuthStore = create(persist(immer((set) => {
  return {
    user : initialValue,
    signin: (userInfo) => {
      set(
        (state) => {
          state.user = userInfo 
          console.log(state.user)
        }
      )
      console.log(userInfo, )
    }
    ,
    logout: () => {
      set((state)=>{
        state.user = initialValue
      })
    }
  }
}), {
  name: "user",
  storage: createJSONStorage(()=>localStorage)
}))

export default useAuthStore
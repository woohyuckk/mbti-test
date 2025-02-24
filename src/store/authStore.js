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

const useAuthStore = create(persist(immer((set,get) => {
  return {
    user : initialValue,
    setUserInfo: (userInfo) => {
      set(
        (state) => {
          state.user = { ...state.user, ...userInfo }
        }
      )
    }
    ,
    logout: () => {
      set((state)=>{
        state.user = initialValue
      })
    },
    isValidToken: () => {
      const token = get().user.token;
      const tokenJson = parseJwt(token);
    }
  }
}), {
  name: "user",
  storage: createJSONStorage(()=>localStorage)
}))

export default useAuthStore
import { create } from "zustand"
import { persist,  } from "zustand/middleware"



const useUsersStore = create(persist((set) => {
  return {
    users: {
      token : ""
    },
    login: (payload) => {
      set((state) => {
        return {
          users: state.users.token = payload
        }
      })
    },
    logout: () => {
      set((state) => {
        return {
          users: state.users.toekn =""
        }
      })

    }
  }
}, {
  name: "users"
}))

export default useUsersStore
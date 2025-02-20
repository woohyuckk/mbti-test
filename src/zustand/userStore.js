import { create } from "zustand"
import { immer } from 'zustand/middleware/immer'




const useUserStore = create(immer((set) => {
  return {
    users: {},
    login: () => {
      set((state) => {
        return {
          users: state.users + 1
        }
      })
    },
    logout: () => {

    }
  }
}))

export default useUserStore
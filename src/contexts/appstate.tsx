import PocketBase from 'pocketbase';
import { create } from "zustand";

type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string
}

type AppState = {
  pocketbase: PocketBase
  user: User | null,
  updateUser: (user: User) => void
}

const useAppStateStore = create<AppState>((set) => ({
  pocketbase: new PocketBase(import.meta.env.VITE_POCKETBASE_URL),
  user: null,
  updateUser: (user) => set(() => ({ user: user }))
}))

export default useAppStateStore
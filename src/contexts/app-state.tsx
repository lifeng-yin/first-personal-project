import PocketBase from 'pocketbase';
import { create } from "zustand";


type AppState = {
  pocketbase: PocketBase
}

const pocketbase = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)

const useAppStateStore = create<AppState>(
  () => ({
    pocketbase
  })
)

export default useAppStateStore
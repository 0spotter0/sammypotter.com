import { create } from 'zustand'

interface StoreState {
  isConsoleMode: boolean
  updateConsoleMode: (mode: boolean) => void
}

export const useStore = create<StoreState>((set) => ({
  isConsoleMode: false,
  updateConsoleMode: (mode: boolean) => set(() => ({ isConsoleMode: mode })),
}))

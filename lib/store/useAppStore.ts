import { create } from 'zustand';

export const useAppStore = create((set) => ({
  theme: 'light',
  user: null,
  setTheme: (mode:any) => set({ theme: mode }),
  setUser: (user:any) => set({ user }),
}));

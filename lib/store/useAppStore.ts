import { create } from 'zustand';

export const useAppStore = create((set) => ({
  theme: 'light',
  user: null,
  setTheme: (mode:unknown) => set({ theme: mode }),
  setUser: (user:unknown) => set({ user }),
}));

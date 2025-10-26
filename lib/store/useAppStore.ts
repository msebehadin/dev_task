import { create } from "zustand";

type User = {
  id?: number;
  role?: string;
  name: string;
};

type Theme = "light" | "dark"; 

type AppStore = {
  user: User | null;
  setUser: (user: User | null) => void;
  theme: Theme;
  setTheme: (mode: Theme) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  theme: "light",
  setUser: (user) => set({ user }),
  setTheme: (mode) => set({ theme: mode }),
}));

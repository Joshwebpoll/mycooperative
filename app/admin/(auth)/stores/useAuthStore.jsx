// stores/useAuthStore.ts
import api from "@/lib/axios";
import { create } from "zustand";
const apiUrl = "http://127.0.0.1:8000/api";
export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  login: async (email, password) => {
    set({ loading: true, error: null });

    try {
      const res = await api.post(`${apiUrl}/login`, { email, password });
      console.log(res);
      set({});
    } catch (err) {
      set({ error: "Failed to fetch contribution", loading: false });
    }
  },
  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
    }),
}));

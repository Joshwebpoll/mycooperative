// stores/useAuthStore.ts

import api from "@/lib/axios";
import { create } from "zustand";
const apiUrl = "http://127.0.0.1:8000/api";
export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  users: {},
  loading: false,
  error: null,
  token: null,
  login: async (email, password) => {
    set({ loading: true, error: null });

    try {
      const res = await api.post(`${apiUrl}/login`, { email, password });
      console.log(res.data);
      if (res.data.status === true) {
        const token = res.data.token;
        const user = res.data.user;
        set({ loading: false, error: null, users: user, token: token });
        localStorage.setItem("token", token);
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || err.message || "Login failed";

      set({ error: errorMsg, loading: false });
      throw { msg: errorMsg };
    } finally {
      set({ loading: false, error: null });
    }
  },
  register: async (
    email,
    first_name,
    password,
    username,
    confirm_password,
    phone_number
  ) => {
    set({ loading: true, error: null });

    try {
      const res = await api.post(`${apiUrl}/register`, {
        email: email,
        name: first_name,
        password,
        username,
        password_confirmation: confirm_password,
        phone_number,
      });
      console.log(res.data);
      // if (res.data.status === true) {
      //   const token = res.data.token;
      //   const user = res.data.user;
      //   set({ loading: false, error: null, users: user, token: token });
      // }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || err.message || "Login failed";
      console.log(err.response?.status);

      if (err.response?.status === 422) {
        const errors = err.response?.data;

        Object.values(errors).forEach((messages) => {
          messages.forEach((message) => {
            console.log(message);
            throw { msg: message };
          });
        });
      }

      set({ error: errorMsg, loading: false });
    } finally {
      set({ loading: false, error: null });
    }
  },
  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
    }),
}));

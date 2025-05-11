import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";
const apiUrl = "http://127.0.0.1:8000/api";
export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  users: {},
  loading: false,
  error: null,
  token: null,
  // csrf: async () => {
  //   try {
  //     const res = await api.get("/sanctum/csrf-cookie", {
  //       headers: {
  //         "X-Requested-With": "XMLHttpRequest",
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // },

  getCsrf: async () => {
    await api.get("/sanctum/csrf-cookie");
  },

  login: async (email, password) => {
    set({ loading: true, error: null });

    try {
      await api.get("/sanctum/csrf-cookie", {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          "Content-Type": "application/json",
          // Origin: "http://localhost:3000",
          // Referer: "http://localhost:3000",
        },
      });
      const res = await api.post(
        `/api/logout`,
        { email, password },
        {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            "Content-Type": "application/json",
            // Origin: "http://localhost:3000",
            // Referer: "http://localhost:3000/login",
          },
        }
      );

      // const res = await axios.post(
      //   `http://localhost:3000/api/auth`,
      //   { email, password },
      //   {
      //     headers: {
      //       // "X-Requested-With": "XMLHttpRequest",
      //       // Accept: "application/json",
      //       // "Content-Type": "application/json",
      //       // Origin: "http://localhost:3000",
      //       // Referer: "http://localhost:3000/login",
      //     },
      //   }
      // );
      // console.log(res.data);
      // if (res.data.status === true) {
      //   const token = res.data.token;
      //   const user = res.data.user;
      //   console.log(token);
      //   // cookies().set("token", token); // optional
      //   // cookies().set("role", user.role);

      //   // localStorage.setItem("token", token);
      //   // localStorage.setItem("role", user.role);
      //   set({ loading: false, error: null, users: user, token: token });
      // }
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

  fetchProfile: async () => {
    try {
      set({ loading: true, error: null });
      const res = await api.get("/api/profile", {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
        withXSRFToken: true,
      });
      //console.log(res.data.messages);
      set({ loading: false, users: res.data.messages, error: null });
    } catch (error) {
      set({ loading: false, error: null });
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

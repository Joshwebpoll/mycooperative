import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { create } from "zustand";
const apiUrl = "http://127.0.0.1:8000/api";
export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  users: {},
  loading: false,
  error: null,
  token: null,
  isForgetloading: false,
  isOtpLoading: false,
  isUpdateLoading: false,
  isUserLoading: true,
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

  login: async (email, password, router) => {
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
        `/api/login`,
        { email, password },
        {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.status === true) {
        const token = res.data.token;
        const user = res.data.user;
        console.log(token);

        set({ loading: false, users: user, token: token });
        router.push("/user/dashboard");
      }

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
      set({ isUserLoading: true, error: null });
      const res = await apiClient.get("/api/user/profile", {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
        withXSRFToken: true,
      });
      //console.log(res.data.messages);
      set({ isUserLoading: false, users: res.data.user });
    } catch (error) {
      set({ isUserLoading: false, error: null });
    } finally {
      set({ isUserLoading: false, error: null });
    }
  },
  resetPassword: async (values, router) => {
    try {
      set({ isForgetloading: true });
      const res = await api.post("/api/forgot_password", {
        email: values.email,
      });
      if (res.data.status === true) {
        set({ isForgetloading: false });
        localStorage.setItem("email", values.email);
        toast.success(res.data.message);
        router.push("/verify-otp");
      }
    } catch (error) {
    } finally {
      set({ isForgetloading: false });
    }
  },
  verifyOtp: async (values, router) => {
    console.log(values);
    try {
      set({ isOtpLoading: true });
      const res = await api.post("/api/reset_password", {
        resetCode: values.otp,
      });
      if (res.data.status === true) {
        set({ isOtpLoading: false });
        localStorage.setItem("otp", values.otp);
        localStorage.removeItem("email");
        toast.success(res.data.message);
        router.push("/reset-password");
      }
    } catch (error) {
    } finally {
      set({ isOtpLoading: false });
    }
  },
  resendOtp: async (values, router) => {
    const email = localStorage.getItem("email");
    try {
      set({ isResendOtpLoading: true });
      const res = await api.post("/api/resend_otp", {
        email: email,
      });
      if (res.data.status === true) {
        set({ isResendOtpLoading: false });
        localStorage.removeItem("email");
        toast.success(res.data.message);
        router.push("/reset-password");
      }
    } catch (error) {
      //localStorage.removeItem("email");
    } finally {
      set({ isResendOtpLoading: false });
    }
  },
  updatePassword: async (values, router) => {
    //GET CODE FROM LOCALSTORAGE
    const otp = localStorage.getItem("otp");

    try {
      set({ isUpdateLoading: true });
      const res = await api.post("/api/password_reset", {
        resetCode: otp,
        password: values.password,
        password_confirmation: values.confirm_password,
      });
      if (res.data.status === true) {
        set({ isUpdateLoading: false });
        localStorage.removeItem("otp");
        localStorage.removeItem("email");
        toast.success(res.data.message);
        router.push("/login");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      set({ isUpdateLoading: false });
    }
  },

  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
    }),
}));

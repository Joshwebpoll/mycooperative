// stores/useAuthStore.ts
import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import { create } from "zustand";
const apiUrl = "http://127.0.0.1:8000/api";
export const useAdminStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  loading:false,
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
      const res = await apiClient.post(
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
        Cookies.set("auth_tokens");

        set({ loading: false, users: user, token: token });
        toast.success(res.data.message);
        router.push("/admin/dashboard");
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
      set({ loading: false });
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

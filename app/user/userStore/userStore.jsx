import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import { saveAs } from "file-saver";

import { create } from "zustand";

const apiUrl = "http://127.0.0.1:8000/api/admin";
const token = "84|kofFvA74qP3vgXv0242yVZE2X5ZILbbESaMAzPEuab460a86";
const userStores = create((set) => ({
  users: [],
  loading: false,
  exportLoading: false,
  error: null,
  meta: {},
  status: "",
  currentPage: 1,
  searchQuery: "",
  search: "",
  logotLoading: "",

  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  fetchUsers: async (page = 1, search = "", status = "") => {
    set({ loading: true, error: null });

    try {
      const res = await api.get(
        `${apiUrl}/users?page=${page}&per_page=10&search=${search}&status=${status}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data.users.data;
      const pages = res.data.users.meta;
      console.log(data);
      set({
        users: data,
        page: pages.current_page,
        lastPage: pages.last_page,
        perPage: pages.per_page,
        total: pages.total,
        from: pages.from,
        to: pages.to,

        meta: {
          current_page: pages.current_page,
          last_page: pages.last_page,
          total: pages.total,
          from: pages.from,
          to: pages.to,
        },
        loading: false,
        currentPage: page,
      });
    } catch (err) {
      set({ error: "Failed to fetch contribution", loading: false });
    } finally {
      set({ loading: false });
    }
  },
  logOutUser: async (router) => {
    set({ logotLoading: true, error: null });

    try {
      const res = await apiClient.post(`/api/user/logout`);
      if (res.data.status === true) {
        router.replace("/login");
      }
    } catch (err) {
      set({ error: "Failed to fetch contribution", logotLoading: false });
    } finally {
      set({ logotLoading: false });
    }
  },

  exportToExcel: async () => {
    set({ exportLoading: true, error: null });
    try {
      const res = await api.get(`${apiUrl}/excel_contribution`, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      });
      const blob = new Blob([res.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      console.log(blob);
      saveAs(blob, "cp_contribution.xlsx");
      set({ exportLoading: false });
    } catch (err) {
      set({ error: "Failed to fetch member", exportLoading: false });
    } finally {
      set({ exportLoading: false });
    }
  },
}));

export default userStores;

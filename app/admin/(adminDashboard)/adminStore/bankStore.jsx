import api from "@/lib/axios";
import { saveAs } from "file-saver";

import { create } from "zustand";

const apiUrl = "http://localhost:8000/api/admin";
const token = "85|hlTToptbhLxzTJ7Yp3WbhmJaKZwnFzF6Nqpjb9rl1e405d32";
const bankStore = create((set) => ({
  allBanks: [],
  allAccounts: [],
  meta: {},
  status: "",
  currentPage: 1,
  searchQuery: "",
  search: "",
  loading: false,
  exportLoading: false,
  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  fetchAllBanks: async (page = 1, search = "", status = "") => {
    set({ loading: true, error: null });

    try {
      const res = await api.get(
        `${apiUrl}/get_banks`,

        {
          params: {
            page: page,
            per_page: 10,
            search: search,
            status: status,
          },
        }
      );
      const data = res.data.banks.data;
      const pages = res.data.banks.meta;

      set({
        allBanks: data,
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
    }
  },
  fetchAllAccount: async (page = 1, search = "", status = "") => {
    set({ loading: true, error: null });

    try {
      const res = await api.get(
        `${apiUrl}/get_account`,

        {
          params: {
            page: page,
            per_page: 10,
            search: search,
            status: status,
          },
        }
      );
      const data = res.data.accounts.data;
      const pages = res.data.accounts.meta;

      set({
        allAccounts: data,
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
    }
  },
}));

export default bankStore;

import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import { saveAs } from "file-saver";
import { toast } from "sonner";

import { create } from "zustand";

const apiUrl = "http://127.0.0.1:8000/api/user";
const token = "84|kofFvA74qP3vgXv0242yVZE2X5ZILbbESaMAzPEuab460a86";
const referralStore = create((set) => ({
  referral: [],
  loading: false,
  isLoading: false,
  exportLoading: false,
  error: null,
  meta: {},
  status: "",
  currentPage: 1,
  searchQuery: "",
  search: "",
  from: "",
  to: "",
  setDateRange: (range) => set({ from: range.from, to: range.to }),
  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  fetchReferral: async (
    page = 1,
    search = "",
    status = "",
    from = "",
    to = ""
  ) => {
    //set({ isLoading: true, error: null });
    set((state) => ({ ...state, isLoading: true }));
    try {
      const res = await apiClient.get(
        `/api/user/get_referral?page=${page}&per_page=10&search=${search}&status=${status}&from=${to}&to=${from}`
      );
      const data = res.data.referral.data;
      const pages = res.data.referral.meta;

      set({
        referral: data,
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
        isLoading: false,
        currentPage: page,
      });
    } catch (err) {
      set({ error: "Failed to fetch contribution", isLoading: false });
    } finally {
      set({ error: "Failed to fetch contribution", isLoading: false });
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

export default referralStore;

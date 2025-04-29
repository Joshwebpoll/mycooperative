import api from "@/lib/axios";
import { saveAs } from "file-saver";

import { create } from "zustand";

const apiUrl = "http://127.0.0.1:8000/api/user";
const token = "84|kofFvA74qP3vgXv0242yVZE2X5ZILbbESaMAzPEuab460a86";
const contributionStore = create((set) => ({
  contribution: [],
  loading: false,
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
  fetchcontributions: async (
    page = 1,
    search = "",
    status = "",
    from = "",
    to = ""
  ) => {
    // const { searchQuery } = get();
    set({ loading: true, error: null });

    try {
      const res = await api.get(
        `${apiUrl}/get_contribution?page=${page}&per_page=10&search=${search}&status=${status}&from=${to}&to=${from}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data.contributions.data;
      const pages = res.data.contributions.meta;

      set({
        contribution: data,
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

export default contributionStore;

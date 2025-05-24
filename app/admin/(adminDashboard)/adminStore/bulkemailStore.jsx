import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import { saveAs } from "file-saver";
import { toast } from "sonner";

import { create } from "zustand";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const token = "85|hlTToptbhLxzTJ7Yp3WbhmJaKZwnFzF6Nqpjb9rl1e405d32";
const bulkEmailStore = create((set) => ({
  contributions: [],
  isCreatingLoading: false,
  loading: false,
  exportLoading: false,
  error: null,
  meta: {},
  status: "",
  currentPage: 1,
  searchQuery: "",
  search: "",
  users: [],
  sucessMessage: "",
  singleCon: {},

  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  fetchcontributions: async (page = 1, search = "", status = "") => {
    // const { searchQuery } = get();
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(
        `api/admin/contribution?page=${page}&per_page=10&search=${search}&status=${status}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data.contributions.data;
      const pages = res.data.contributions.meta;

      set({
        contributions: data,
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

  createBulkEmail: async (values) => {
    set({ isCreatingLoading: true });
    try {
      const res = await apiClient.post(
        `api/admin/bulkemail`,
        {
          subject: values.subject,
          message: values.message,
          users: values.users,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      if (res.data.status === true) {
        set({
          isCreatingLoading: false,
        });
        toast.success(res.data.message);
      }
    } catch (err) {
      set({ isCreatingLoading: false });
    } finally {
      set({ isCreatingLoading: false });
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

export default bulkEmailStore;

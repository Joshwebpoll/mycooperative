import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import { saveAs } from "file-saver";
import { toast } from "sonner";

import { create } from "zustand";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const token = "85|hlTToptbhLxzTJ7Yp3WbhmJaKZwnFzF6Nqpjb9rl1e405d32";
const NotificationStores = create((set) => ({
  notification: [],
  isLoading: false,
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
  isCreating: false,

  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  fetchNotification: async (page = 1, search = "", status = "") => {
    set({ isLoading: true, error: null });

    try {
      const res = await apiClient.get(
        `api/admin/notification?page=${page}&per_page=10&search=${search}&status=${status}`
      );
      const data = res.data.notification.data;
      const pages = res.data.notification;

      set({
        notification: data,
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
      console.log(pages.total);
      set({ isLoading: false });
    } catch (err) {
      set({ isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },

  createNotification: async (values) => {
    set({ isCreating: true });
    try {
      const res = await apiClient.post(`api/admin/notification`, {
        title: values.title,
        message: values.message,
        user_id: values.user_id,
        type: values.type,
      });
      if (res.data.status === true) {
        toast.success(res.data.message);
      }
    } catch (error) {
      set({ isCreating: false });
    } finally {
      set({ isCreating: false });
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

export default NotificationStores;

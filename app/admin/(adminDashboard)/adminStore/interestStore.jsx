import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import { saveAs } from "file-saver";
import { toast } from "sonner";

import { create } from "zustand";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const token = "85|hlTToptbhLxzTJ7Yp3WbhmJaKZwnFzF6Nqpjb9rl1e405d32";
const interestStore = create((set) => ({
  interests: [],
  loading: false,
  exportLoading: false,
  error: null,
  meta: {},
  status: "",
  currentPage: 1,
  searchQuery: "",
  search: "",
  isCreateLoading: false,
  isCreateRefLoading: false,

  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  fetchInterests: async (page = 1, search = "", status = "") => {
    set({ loading: true, error: null });

    try {
      const res = await api.get(
        `${apiUrl}/get_interest?page=${page}&per_page=10&search=${search}&status=${status}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data.interests.data;
      const pages = res.data.interests.meta;
      console.log(data);
      set({
        interests: data,
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

  createInterest: async (values) => {
    set({ loading: true, error: null });
    try {
      const res = await apiClient.post(
        `api/admin/add_interest`,
        {
          interest_rate: values.interest_rate,
          min_amount: values.min_amount,
          max_amount: values.max_amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.status === true) {
        set({ loading: false, error: null });
      }
    } catch (err) {
      let errorMsg = "";
      errorMsg = err.response?.data?.message || err.message || "Login failed";
      console.log(errorMsg);
      if (err.response?.status === 422) {
        const errors = err.response?.data;
        console.log(errors);
        Object.values(errors).forEach((messages) => {
          messages.forEach((message) => {
            errorMsg = message;

            throw { msg: errorMsg };
          });
        });
      }

      set({ error: errorMsg, loading: false });
      throw { msg: errorMsg };
    } finally {
      set({ loading: false, error: null });
    }
  },
  updateReferral: async (values, reward) => {
    set({ isCreateRefLoading: true });
    try {
      const res = await apiClient.put(
        `api/admin/update_referral/${reward.id}`,
        {
          referral_reward_percent: values.reward_percent,
          min_amount: values.min_amount,
          max_amount: values.max_amount,
        }
      );
      if (res.data.status === true) {
        set({ isCreateRefLoading: false });
        toast.success(res.data.message);
      }
    } catch (err) {
      set({ isCreateRefLoading: false });
    } finally {
      set({ isCreateRefLoading: false });
    }
  },
  updateInterest: async (values, interest) => {
    set({ isCreateLoading: true });
    try {
      const res = await apiClient.put(
        `api/admin/update_interest/${interest.id}`,
        {
          interest_rate: values.interest,
          min_amount: values.min_amount,
          max_amount: values.max_amount,
        }
      );
      if (res.data.status === true) {
        set({ isCreateLoading: false });
        toast.success(res.data.message);
      }
    } catch (err) {
      set({ error: errorMsg, loading: false });
    } finally {
      set({ isCreateLoading: false });
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

export default interestStore;

import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import { saveAs } from "file-saver";
import { toast } from "sonner";

import { create } from "zustand";

const apiUrl = "http://127.0.0.1:8000/api/admin";
const token = "85|hlTToptbhLxzTJ7Yp3WbhmJaKZwnFzF6Nqpjb9rl1e405d32";
const loanStore = create((set) => ({
  loans: [],
  loading: false,
  exportLoading: false,
  error: null,
  meta: {},
  status: "",
  currentPage: 1,
  searchQuery: "",
  search: "",
  users: [],
  loan: {},
  approveLoading: false,

  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  fetchLoans: async (page = 1, search = "", status = "") => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(
        `/api/admin/get_loan?page=${page}&per_page=10&search=${search}&status=${status}`
      );
      const data = res.data.loans.data;
      const pages = res.data.loans.meta;
      console.log(data);
      set({
        loans: data,
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

  createLoan: async (values) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post(
        `${apiUrl}/create_loan`,
        {
          user_id: values.user_id,
          amount: Number(values.amount),
          purpose: values.purpose,
          guarantor_user_id: values.guarantor_user_id,
          status: values.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.status === true) {
        set({
          loading: false,
          sucessMessage: res.data.message,
        });
      }
    } catch (err) {
      let errorMsg = "";
      errorMsg = err.response?.data?.message || err.message || "Login failed";

      if (err.response?.status === 422) {
        const errors = err.response?.data;

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
      set({ error: null, loading: false });
    }
  },

  approveLoan: async (values, id) => {
    set({ approveLoading: true });
    try {
      const res = await apiClient.put(`/api/admin/approve_loan/${id}`, {
        guarantor_user_id: values.guarantor_user_id,
        status: values.status,
      });

      if (res.data.status === true) {
        set({
          approveLoading: false,
        });
        toast.success(res.data.message);
      }
    } catch (err) {
      set({ approveLoading: false });
    } finally {
      set({ approveLoading: false });
    }
  },

  fetchUsers: async () => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(`/api/admin/users_con`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data.users.data;
      console.log(res.data);
      set({
        users: data,
        loading: false,
      });
    } catch (err) {
      set({ error: "Failed to fetch contribution", loading: false });
    }
  },
  getSingleLoan: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await apiClient.get(
        `/api/admin/get_loan/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.loan);
      if (res.data.status === true) {
        set({
          loading: false,
          sucessMessage: res.data.message,
          loan: res.data.loans,
        });
      }
    } catch (err) {
      set({ loading: false });
    } finally {
      set({ error: null, loading: false });
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

export default loanStore;

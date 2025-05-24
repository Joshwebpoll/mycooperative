import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import { saveAs } from "file-saver";
import { toast } from "sonner";
import { mutate } from "swr";

import { create } from "zustand";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const token = "85|hlTToptbhLxzTJ7Yp3WbhmJaKZwnFzF6Nqpjb9rl1e405d32";
const repaymentStore = create((set) => ({
  repayments: [],
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
  isCreatingloading: false,
  setDateRange: (range) => set({ from: range.from, to: range.to }),

  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  fetchRepayments: async (
    page = 1,
    search = "",
    status = "",
    from = "",
    to = ""
  ) => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(
        `/api/admin/loan_repayment?page=${page}&per_page=10&search=${search}&status=${status}&from=${to}&to=${from}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data.repayments.data;
      const pages = res.data.repayments.meta;
      console.log(data);
      set({
        repayments: data,
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

  addManualRepayment: async (values, setShowModal) => {
    try {
      set({ isCreatingloading: true });
      const res = await apiClient.post(`/api/admin/loan_repayment`, {
        repayment_amount: values.repayment_amount,
        loan_number: values.loan_number,
        customer_account_number: values.acct_number,
        payment_method: values.payment_method,
        status: values.status,
      });
      console.log(res.data);
      if (res.data.status === true) {
        toast.success(res.data.message);
        set({ isCreatingloading: false });
        mutate("/admin/repayment");
        setShowModal(false);
      }
    } catch (error) {
      set({ isCreatingloading: false });
    } finally {
      set({ isCreatingloading: false });
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

export default repaymentStore;

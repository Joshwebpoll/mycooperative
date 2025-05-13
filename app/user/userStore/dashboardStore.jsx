import apiClient from "@/lib/axios";
import { toast } from "sonner";
import { create } from "zustand";
const dashboardStore = create((set) => ({
  dashboard: [],
  loading: true,
  isLoading: true,
  total_savings: null,
  activeLoan: null,
  pending_loans: null,
  total_shares: null,
  completedLoans: null,
  totalRepayment: null,
  latestContribution: [],

  fetchDashboard: async () => {
    set({ loading: true });
    try {
      const res = await apiClient.get("/api/user/summary");

      if (res.data.status === true) {
        set({
          total_savings: res.data.total_savings,
          activeLoan: res.data.active_loans,
          pending_loans: res.data.pending_loans,
          total_shares: res.data.total_shares,
          completedLoans: res.data.completedLoans,
          totalRepayment: res.data.total_repayment,
          loading: false,
        });
      }
    } catch (error) {
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
  fetchLatestContribution: async () => {
    set({ isLoading: true });
    try {
      const res = await apiClient.get("/api/user/latest_contribution");
      console.log(res.data.contributions);

      if (res.data.status === true) {
        set({
          latestContribution: res.data.contributions,
          isLoading: false,
        });
      }
    } catch (error) {
      set({ isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default dashboardStore;

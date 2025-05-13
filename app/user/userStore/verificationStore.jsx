import apiClient from "@/lib/axios";
import { format } from "date-fns";
import { toast } from "sonner";
import { create } from "zustand";
const verificationStore = create((set) => ({
  dashboard: [],
  isLoadingNin: false,
  isLoadingBvn: false,

  isUserLoading: true,
  personalUser: {},
  verifyingBvn: async (values) => {
    set({ isLoadingBvn: true });
    try {
      const res = await apiClient.post("/api/user/bvn", {
        bvn: values.bvn,
        bvn_phone_number: values.bvn_phone_number,
        date_of_birth: format(new Date(values.date_of_birth), "dd-MMM-yyyy"),
        gender: values.gender,
      });
      console.log(res.data);

      if (res.data.status === true) {
        set({
          isLoadingBvn: false,
        });
        toast.success(res.data.message);
      }
    } catch (error) {
      set({ isLoadingBvn: false });
    } finally {
      set({ isLoadingBvn: false });
    }
  },
  verifyingNin: async (values) => {
    set({ isLoadingNin: true });
    try {
      const res = await apiClient.get("/api/user/nin", {
        nin: values.nin,
        nin_phone_number: values.nin_phone_number,
        date_of_birth: format(new Date(values.date_of_birth), "dd-MMM-yyyy"),
        gender: values.gender,
      });

      if (res.data.status === true) {
        set({
          latestContribution: res.data.contributions,
          isLoadingNin: false,
        });
      }
    } catch (error) {
      set({ isLoadingNin: false });
    } finally {
      set({ isLoadingNin: false });
    }
  },
  getSingleUser: async () => {
    set({ isUserLoading: true });
    try {
      const res = await apiClient.get("/api/user/personal_user");

      if (res.data.status === true) {
        set({
          personalUser: res.data.user,
          isUserLoading: false,
        });
      }
    } catch (error) {
      set({ isUserLoading: false });
    } finally {
      set({ isUserLoading: false });
    }
  },
}));

export default verificationStore;

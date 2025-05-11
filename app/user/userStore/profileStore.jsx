import apiClient from "@/lib/axios";
import { toast } from "sonner";
import { create } from "zustand";
const profileStore = create((set) => ({
  banks: [],
  account: {},
  loading: false,
  isCreating: false,
  isUserLoading: false,
  personalUser: {},
  isUpdating: false,
  isUpdatingPassword: false,
  getAllBanks: async () => {
    set({ loading: true });
    try {
      const res = await apiClient.get("/api/user/get_banks");

      if (res.data.status === true) {
        set({ banks: res.data.banks, loading: false });
      }
    } catch (error) {
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
  verifyBanks: async (values) => {
    set({ isCreating: true });
    console.log(values, "hello");
    try {
      const res = await apiClient.post("/api/user/verify_bank", {
        bank_account_number: values.bank_account_number,
        bank_code: Number(values.bank_name),
        bank_account_name: values.bank_account_name,
      });
      console.log(res.data);

      if (res.data.status === true) {
        set({ isCreating: false });
        toast.success(res.data.message);
      }
    } catch (error) {
      set({ isCreating: false });
    } finally {
      set({ isCreating: false });
    }
  },

  getAllAccountNumber: async () => {
    set({ loading: true });
    try {
      const res = await apiClient.get("/api/user/get_account_number");
      console.log(res.data);
      if (res.data.status === true) {
        set({ account: res.data.account_details, loading: false });
      }
    } catch (error) {
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
  getSingleUserUpdate: async () => {
    set({ isUserLoading: true });
    try {
      const res = await apiClient.get("/api/user/personal_user");

      if (res.data.status === true) {
        set({ personalUser: res.data.user, isUserLoading: false });
      }
    } catch (error) {
      set({ isUserLoading: false });
    } finally {
      set({ isUserLoading: false });
    }
  },
  updateUserProfile: async (values) => {
    set({ isUpdating: true });
    try {
      const res = await apiClient.post("/api/user/update_profile", {
        name: values.name,
        surname: values.surname,
        lastname: values.lastname,
        username: values.username,
        email: values.email,
        phone_number: values.phone_number,
        date_of_birth: values.date_of_birth,
        country: values.country,
        state: values.state,
        address: values.address,
        city: values.city,
        gender: values.gender,
      });
      console.log(res.data);
      if (res.data.status === true) {
        set({ isUpdating: false });
        toast.success(res.data.message);
      }
    } catch (error) {
      set({ isUpdating: false });
    } finally {
      set({ isUpdating: false });
    }
  },
  updateUserPassword: async (values, router) => {
    set({ isUpdatingPassword: true });
    try {
      const res = await apiClient.post("/api/user/update_password", {
        current_password: values.current_password,
        password: values.password,
        password_confirmation: values.password_confirmation,
      });
      console.log(res.data);
      if (res.data.status === true) {
        set({ isUpdatingPassword: false });
        toast.success(res.data.message);
        router.push("/login");
      }
    } catch (error) {
      set({ isUpdatingPassword: false });
    } finally {
      set({ isUpdatingPassword: false });
    }
  },
}));

export default profileStore;

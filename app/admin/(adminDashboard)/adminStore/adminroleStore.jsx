import apiClient from "@/lib/axios";
import api from "@/lib/axios";
import { saveAs } from "file-saver";
import { toast } from "sonner";

import { create } from "zustand";

const apiUrl = "http://localhost:8000/api/admin";
const token = "85|hlTToptbhLxzTJ7Yp3WbhmJaKZwnFzF6Nqpjb9rl1e405d32";
const adminRoleStore = create((set, get) => ({
  allAdmin: [],
  meta: {},
  status: "",
  allRolesPag: [],
  currentPage: 1,
  searchQuery: "",
  search: "",
  loading: false,
  exportLoading: false,
  roles: [],
  permissions: [],
  roleWithPermission: [],
  addPerLoading: false,
  setSearch: (search) => set({ search }),
  setStatus: (status) => set({ status }),
  fetchAllAdmin: async (page = 1, search = "", status = "") => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(
        `/api/admin/index`,

        {
          params: {
            page: page,
            per_page: 10,
            search: search,
            status: status,
          },
        }
      );
      const data = res.data.users;
      const pages = res.data.users;
      console.log(pages.data);

      set({
        allAdmin: pages.data,
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

      console.log(allAdmin, "from store");
    } catch (err) {
      console.log(err);
      set({ error: "Failed to fetch contribution", loading: false });
    } finally {
    }
  },
  fetchAllRole: async (page = 1, search = "", status = "") => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(
        `/api/admin/getroles`,

        {
          params: {
            page: page,
            per_page: 10,
            search: search,
            status: status,
          },
        }
      );

      const pages = res.data.roles;
      console.log(pages.data);

      set({
        roles: pages.data,
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
      console.log(err);
      set({ error: "Failed to fetch contribution", loading: false });
    } finally {
    }
  },
  fetchAllRoleWithOutPagination: async () => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(`/api/admin/allroles`);

      const pages = res.data.roles;
      console.log(pages);

      set({
        allRolesPag: pages,
      });
    } catch (err) {
      console.log(err);
      set({ error: "Failed to fetch contribution", loading: false });
    } finally {
    }
  },
  fetchAllPermission: async (page = 1, search = "", status = "") => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(
        `/api/admin/getpermission`,

        {
          params: {
            page: page,
            per_page: 10,
            search: search,
            status: status,
          },
        }
      );

      const pages = res.data.permissions;
      console.log(pages.data);

      set({
        permissions: pages.data,
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
      console.log(err);
      set({ error: "Failed to fetch contribution", loading: false });
    } finally {
    }
  },
  fetchPermissionWithRole: async (page = 1, search = "", status = "", perm) => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(
        `/api/admin/permission/${perm}`,

        {
          params: {
            page: page,
            per_page: 10,
            search: search,
            status: status,
          },
        }
      );

      const pages = res.data.perRole;
      console.log(res.data.perRole.data, "me");

      set({
        roleWithPermission: pages,
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
      console.log(err);
      set({ error: "Failed to fetch contribution", loading: false });
    } finally {
    }
  },

  deletePermission: async (id) => {
    try {
      const res = await apiClient.delete(`/api/admin/permissions/${id}`);

      if (res.data.status === true) {
        toast.success(res.data.message);
      }

      const deletePerm = get().permissions.filter((data) => data.id !== id);
      set({ permissions: deletePerm });
    } catch (error) {
      console.log(error);
      set({ permissions: get().permissions });
    } finally {
    }
  },
  addPermission: async (values, setModalOpen) => {
    set({ addPerLoading: true, error: null });
    try {
      const res = await apiClient.post(`/api/admin/permission`, {
        name: values.permission_name,
        role: values.role,
      });

      if (res.data.status === true) {
        toast.success(res.data.message);
        setModalOpen(false);
      }

      set({
        addPerLoading: false,
        permissions: [
          ...get().permissions,
          {
            id: Date.now(),
            name: values.permission_name,
            guard_name: "web",
            created_at: Date.now(),
          },
        ],
      });
    } catch (error) {
      set({ addPerLoading: false });
    } finally {
      set({ addPerLoading: false });
    }
  },
  addRole: async (values, setModalOpen) => {
    set({ addPerLoading: true, error: null });
    try {
      const res = await apiClient.post(`/api/admin/roles`, {
        name: values.role_name,
      });

      if (res.data.status === true) {
        toast.success(res.data.message);
        setModalOpen(false);
      }
      console.log(res.data);
      set({
        addPerLoading: false,
        roles: [
          ...get().roles,
          res.data.role,
          // {
          //   id: Date.now(),
          //   name: values.role_name,
          //   guard_name: "web",
          //   created_at: Date.now(),
          // },
        ],
      });
    } catch (error) {
      set({ addPerLoading: false });
    } finally {
      set({ addPerLoading: false });
    }
  },

  deleteRoles: async (id) => {
    try {
      const res = await apiClient.delete(`/api/admin/roles/${id}`);

      if (res.data.status === true) {
        toast.success(res.data.message);
      }

      const deletePerm = get().roles.filter((data) => data.id !== id);
      set({ roles: deletePerm });
    } catch (error) {
      console.log(error);
      set({ roles: get().roles });
    } finally {
    }
  },
}));

export default adminRoleStore;

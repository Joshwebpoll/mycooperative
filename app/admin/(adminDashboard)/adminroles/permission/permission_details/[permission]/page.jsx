"use client";

import { DataTables } from "@/components/tables/data-table";

import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

import { Formik } from "formik";
import { Label } from "@/components/ui/label";
import Modals from "@/components/standardModal/standardModal";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import Loading from "@/components/loading_spinner/loading";
import { PermissionRoleColumns } from "../rolePermissionColumns";
import adminRoleStore from "@/app/admin/(adminDashboard)/adminStore/adminroleStore";

export default function AdminRolePermissionPage({ params }) {
  const { permission } = use(params);
  console.log(permission);
  const {
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
  } = adminRoleStore();
  const fetchAllPermission = adminRoleStore(
    (state) => state.fetchAllPermission
  );
  const roleWithPermission = adminRoleStore(
    (state) => state.roleWithPermission
  );
  const fetchPermissionWithRole = adminRoleStore(
    (state) => state.fetchPermissionWithRole
  );

  //   useEffect(() => {
  //     fetchPermissionWithRole(permission);
  //   }, [permission]);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchAllPermission(1, debouncedSearch, status);
    }, 500); // 500ms delay

    return () => clearTimeout(handler); // cleanup previous timer
  }, [debouncedSearch]);

  const handleSearchChange = (e) => {
    setDebouncedSearch(e.target.value);
  };

  useEffect(() => {
    fetchPermissionWithRole(currentPage, search, status, permission);
  }, [permission]);
  useEffect(() => {
    fetchPermissionWithRole(1, debouncedSearch, status);
  }, [status]);

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="container mx-auto py-5 shadow rounded bg-white ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3 p-3">
        <div className="w-[100%]">
          <Input
            type="text"
            placeholder="Search contribution..."
            value={debouncedSearch}
            onChange={handleSearchChange}
          />
        </div>

        <div className="w-[100%]">
          <Button className="w-full" onClick={() => setModalOpen(true)}>
            <Plus className="text-bold" /> Create
          </Button>
        </div>
      </div>
      <DataTables
        columns={PermissionRoleColumns}
        data={roleWithPermission}
        fetchPage={fetchPermissionWithRole}
        meta={meta}
      />
    </div>
  );
}

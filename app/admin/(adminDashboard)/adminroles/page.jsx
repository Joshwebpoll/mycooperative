"use client";

import { DataTables } from "@/components/tables/data-table";

import Link from "next/link";
import React, { useEffect, useState } from "react";
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

import adminRoleStore from "../adminStore/adminroleStore";
import { AdminRolesColumns } from "./adminRolesColumns/adminRolesColumns";

export default function AdminRolePage() {
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
  const fetchAllAdmin = adminRoleStore((state) => state.fetchAllAdmin);
  const allAdmin = adminRoleStore((state) => state.allAdmin);
  console.log(allAdmin, "uus");

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchAllAdmin(1, debouncedSearch, status);
    }, 500); // 500ms delay

    return () => clearTimeout(handler); // cleanup previous timer
  }, [debouncedSearch]);

  const handleSearchChange = (e) => {
    setDebouncedSearch(e.target.value);
  };
  const handleStatusChange = (value) => {
    setStatus(value == "all" ? "" : value);
  };
  useEffect(() => {
    fetchAllAdmin(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchAllAdmin(1, debouncedSearch, status);
  }, [status]);

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
        {/* <div className="w-[100%]">
          <Button
            variant="outline"
            className="w-[100%]"
            onClick={downloadExport}
          >
            {exportLoading ? "loading..." : "Export Contribution"}
          </Button>
        </div> */}

        <div className="w-[100%]">
          <Select onValueChange={handleStatusChange}>
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="disbursed">Disbursed</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="defaulted">Defaulted</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[100%]">
          <Button asChild className="w-full">
            <Link href="/admin/loan/create">
              <Plus className="text-bold" /> Create
            </Link>
          </Button>
        </div>
      </div>
      <DataTables
        columns={AdminRolesColumns}
        data={allAdmin}
        fetchPage={fetchAllAdmin}
        meta={meta}
      />
    </div>
  );
}

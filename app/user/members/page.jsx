"use client";

import { DataTables } from "@/components/tables/data-table";

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

import { membersColumns } from "./memberColumns/memberColumns";
import memberStore from "../userStore/memberStore";
import SkeletonTable from "@/components/tableSkeleton/tableSkeleton";
import LoadingOverlay from "@/components/loadingOvalay/loadingOverlay";

export default function DemoPage() {
  const {
    fetchMembers,
    members,
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
  } = memberStore();
  const loading = memberStore((state) => state.loading);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchMembers(1, debouncedSearch, status);
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
    fetchMembers(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchMembers(1, debouncedSearch, status);
  }, [status]);
  //exportToExcel();
  //useEffect(() => {}, []);
  const downloadExport = () => {
    exportToExcel();
  };

  // if (loading) {
  //   return (
  //     <div className="container mx-auto py-5  rounded bg-white  overflow-auto">
  //       <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3 p-3">
  //         <div className="w-[100%]">
  //           {/* Input Skeleton */}
  //           <div className=" h-10 rounded-md bg-[#e1e6f0] animate-pulse" />
  //         </div>
  //         <div className="w-[100%]">
  //           {/* Input Skeleton */}
  //           <div className=" h-10 rounded-md bg-[#e1e6f0] animate-pulse" />
  //         </div>
  //         <div className="w-[100%]">
  //           {/* Input Skeleton */}
  //           <div className="h-10 rounded-md bg-[#e1e6f0] animate-pulse" />
  //         </div>

  //         <div className="w-[100%]">
  //           {/* Input Skeleton */}
  //           <div className="h-10 rounded-md bg-[#e1e6f0] animate-pulse" />
  //         </div>
  //       </div>
  //       <SkeletonTable columns={5} rows={5} />
  //     </div>
  //   );
  // }
  return (
    <div className="container mx-auto py-5 shadow-xl rounded bg-white relative ">
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
          <Button
            variant="outline"
            className="w-[100%]"
            onClick={downloadExport}
          >
            {exportLoading ? "loading..." : "Export Contribution"}
          </Button>
        </div>

        <div className="w-[100%]">
          <Select onValueChange={handleStatusChange}>
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[100%]">
          <Button size="lg" className="w-[100%]">
            <Plus className="text-bold" /> Create
          </Button>
        </div>
      </div>
      <DataTables
        columns={membersColumns}
        data={members}
        fetchPage={fetchMembers}
        meta={meta}
      />
      {loading ? <LoadingOverlay /> : ""}
    </div>
  );
}

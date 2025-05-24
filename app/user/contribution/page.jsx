"use client";

import { columns } from "@/components/tables/columns";
import { DataTables } from "@/components/tables/data-table";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Button } from "@/components/ui/button";
import contributionStore from "../userStore/contributionStore";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { DatePickerWithRange } from "@/components/date_pickers/datePickerWithRange";
import SkeletonTable from "@/components/tableSkeleton/tableSkeleton";
import LoadingOverlay from "@/components/loadingOvalay/loadingOverlay";

export default function DemoPage() {
  const {
    fetchcontributions,
    contribution,
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
    setDateRange,
  } = contributionStore();
  const loading = contributionStore((state) => state.loading);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchcontributions(1, debouncedSearch, status);
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
    fetchcontributions(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchcontributions(1, debouncedSearch, status);
  }, [status]);
  //exportToExcel();
  //useEffect(() => {}, []);
  const downloadExport = () => {
    exportToExcel();
  };
  // if (loading) {
  //   return (
  //     <div className="container mx-auto py-5 shadow rounded bg-white  overflow-auto">
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
  //       <SkeletonTable columns={7} rows={10} />
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto py-5 shadow-xl rounded-xl bg-white relative">
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
          <DatePickerWithRange setDateRange={setDateRange} />
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DataTables
        columns={columns}
        data={contribution}
        fetchPage={fetchcontributions}
        meta={meta}
      />
      {loading ? <LoadingOverlay /> : ""}
    </div>
  );
}

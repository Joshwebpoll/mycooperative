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
import { Loader2, Plus } from "lucide-react";
import { DatePickerWithRange } from "@/components/date_pickers/datePickerWithRange";
import { Textarea } from "@/components/ui/textarea";
import { Formik } from "formik";

import { Label } from "@/components/ui/label";
import Loading from "@/components/loading_spinner/loading";
import { toast } from "sonner";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import { loanValidationSchema } from "@/components/loanValidation/loanValidation";
import SkeletonTable from "@/components/tableSkeleton/tableSkeleton";
import LoadingOverlay from "@/components/loadingOvalay/loadingOverlay";
import { notificationColumns } from "./notificationColumns/notifyColumns";
import NotificationStores from "../adminStore/notificationStores";

export default function NotificationPage() {
  const {
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
    setDateRange,
    isLoading,
  } = NotificationStores();
  const fetchNotification = NotificationStores(
    (state) => state.fetchNotification
  );
  const notification = NotificationStores((state) => state.notification);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchNotification(1, debouncedSearch, status);
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
    fetchNotification(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchNotification(1, debouncedSearch, status);
  }, [status]);
  //exportToExcel();
  //useEffect(() => {}, []);
  const downloadExport = () => {
    exportToExcel();
  };
  //Apply For Loan

  const [open, setOpen] = useState(false);

  // if (isLoading) {
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
  //       <SkeletonTable columns={5} rows={5} />
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto py-5 shadow rounded bg-white  overflow-auto relative">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3 p-3">
        <div className="w-[100%]">
          <Input
            type="text"
            placeholder="Search notifications..."
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
          <Button asChild className="w-full">
            <Link href="/admin/notifications/create">
              <Plus className="text-bold" /> Create
            </Link>
          </Button>
        </div>
      </div>
      <DataTables
        columns={notificationColumns}
        data={notification}
        fetchPage={fetchNotification}
        meta={meta}
        loading={isLoading}
      />

      {isLoading ? <LoadingOverlay /> : ""}
    </div>
  );
}

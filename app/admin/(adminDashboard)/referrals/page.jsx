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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Loading from "@/components/loading_spinner/loading";
import { toast } from "sonner";
import CustomErrorMessage from "@/components/errorMessage/errorMessage";
import { loanValidationSchema } from "@/components/loanValidation/loanValidation";
import SkeletonTable from "@/components/tableSkeleton/tableSkeleton";
import LoadingOverlay from "@/components/loadingOvalay/loadingOverlay";
import { referralColumns } from "./referralsColumns/referralsColumns";
import ReferralsStore from "../adminStore/referralStore";

export default function ReferralAdminPage() {
  const {
    referrals,
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
    setDateRange,
  } = ReferralsStore();
  const isLoading = ReferralsStore((state) => state.isLoading);
  const fetchReferrals = ReferralsStore((state) => state.fetchReferrals);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchReferrals(1, debouncedSearch, status);
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
    fetchReferrals(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchReferrals(1, debouncedSearch, status);
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
            placeholder="Search referral..."
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
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="disbursed">Disbursed</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="defaulted">Defaulted</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DataTables
        columns={referralColumns}
        data={referrals}
        fetchPage={fetchReferrals}
        meta={meta}
        loading={isLoading}
      />

      {isLoading ? <LoadingOverlay /> : ""}
    </div>
  );
}

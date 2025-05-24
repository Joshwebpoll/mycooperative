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
import { referralColumns } from "./referralColumns/page";
import referralStore from "../userStore/referralStore";

export default function ReferralPage() {
  const {
    referral,
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
    setDateRange,
  } = referralStore();
  const isLoading = referralStore((state) => state.isLoading);
  const fetchReferral = referralStore((state) => state.fetchReferral);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchReferral(1, debouncedSearch, status);
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
    fetchReferral(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchReferral(1, debouncedSearch, status);
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
    <div className="container mx-auto py-5 shadow-xl rounded-xl bg-white  overflow-auto relative">
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
        data={referral}
        fetchPage={fetchReferral}
        meta={meta}
        loading={isLoading}
      />

      {isLoading ? <LoadingOverlay /> : ""}

      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger> */}
        <DialogContent>
          <Formik
            initialValues={{
              amount: "",
              purpose: "",
            }}
            validationSchema={loanValidationSchema}
            onSubmit={async (values, { setSubmitting, resetform }) => {
              try {
                //await applyForLoan(values);
                resetform();
              } catch (error) {
                setSubmitting(false);
              } finally {
                setSubmitting(false);
                setOpen(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle>Loan Application</DialogTitle>
                  <DialogDescription>
                    Please fill the form below to apply for a loan.
                  </DialogDescription>
                </DialogHeader>

                <div className="mb-3">
                  <label className="block text-gray-700 text-[14px] mb-2">
                    Amount
                  </label>
                  <Input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Loan Amount"
                    value={values.amount}
                    onChange={handleChange}
                    className="w-full  border rounded-lg focus:outline-none focus-visible:ring-[1px] "
                  />
                  <CustomErrorMessage name="amount" />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 text-[14px] mb-2">
                    Purpose
                  </label>
                  <Textarea
                    id="purpose"
                    name="purpose"
                    value={values.purpose}
                    onChange={handleChange}
                    placeholder="Type your message here."
                    className="w-full h-[100px] px-4 py-2 border rounded-lg focus-visible:ring-[1px] focus:outline-none focus:ring-1 focus-visible::text-[#206bc4]"
                  />
                  <CustomErrorMessage name="purpose" />
                </div>

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}

                    // onClick={() => {
                    //   setOpen(false);
                    // }}
                  >
                    {loading ? "Processing" : "Proceed"}
                  </Button>
                </DialogFooter>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}

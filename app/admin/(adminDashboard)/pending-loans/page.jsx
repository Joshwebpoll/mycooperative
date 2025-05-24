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
import { loanColumns } from "./loanColumns/loanColumns";
import loanStore from "../adminStore/loanStore";

export default function PendingLoanPage() {
  const {
    fetchLoans,
    loans,
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
  } = loanStore();

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchLoans(1, debouncedSearch, status);
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
    fetchLoans(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchLoans(1, debouncedSearch, status);
  }, [status]);
  //exportToExcel();
  //useEffect(() => {}, []);
  const downloadExport = () => {
    exportToExcel();
  };
  return (
    <div className="container mx-auto py-5 shadow rounded bg-white ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3 p-3">
        <div className="w-[100%]">
          <Input
            type="text"
            placeholder="Search loan..."
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
        columns={loanColumns}
        data={loans}
        fetchPage={fetchLoans}
        meta={meta}
      />
    </div>
  );
}

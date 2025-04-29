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

import repaymentStore from "../userStore/repaymentStore";

import { DatePickerWithRange } from "@/components/date_pickers/datePickerWithRange";
import { interestColumns } from "./interestColumns/interestColumns";
import interestStore from "../userStore/interestStore";

export default function DemoPage() {
  const {
    fetchInterests,
    interests,
    meta,
    currentPage,
    search,
    setStatus,
    status,
    setSearch,
    exportToExcel,
    exportLoading,
    setDateRange,
    from,
    to,
  } = interestStore();

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
      fetchInterests(1, debouncedSearch, status);
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
    fetchInterests(currentPage, search, status);
  }, []);
  useEffect(() => {
    fetchInterests(1, debouncedSearch, status);
  }, [status]);
  //exportToExcel();
  //useEffect(() => {}, []);
  const downloadExport = () => {
    exportToExcel();
  };

  const handleSearch = () => {
    fetchInterests(currentPage, search, status, to, from);
  };
  return (
    <div className="container mx-auto py-5 shadow rounded bg-white ">
      <div className="flex justify-end p-3">
        <Button>
          <Plus />
          Create
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-2 p-3 ">
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
        <div className="">
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
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <div className="justify-self-end">
          <Button size="lg">
            <Plus className="text-bold" /> Create
          </Button>
        </div> */}
      </div>
      <DataTables
        columns={interestColumns}
        data={interests}
        fetchPage={fetchInterests}
        meta={meta}
      />
    </div>
  );
}

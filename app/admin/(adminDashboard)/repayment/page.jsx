"use client";

// import { DataTables } from "@/components/tables/data-table";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Plus } from "lucide-react";
// // import { loanColumns } from "./loanColumns/loanColumns";
// // import loanStore from "../adminStore/loanStore";
// import repaymentStore from "../adminStore/repaymentStore";
// import { repaymentColumns } from "./repaymentColumns/repaymentColumns";
// import { DatePickerWithRange } from "@/components/date_pickers/datePickerWithRange";
// import { CreateRepayment } from "./create/page";

// export default function DemoPage() {
//   const {
//     fetchRepayments,
//     repayments,
//     meta,
//     currentPage,
//     search,
//     setStatus,
//     status,
//     setSearch,
//     exportToExcel,
//     exportLoading,
//     setDateRange,
//     from,
//     to,
//   } = repaymentStore();

//   const [debouncedSearch, setDebouncedSearch] = useState(search);
//   const [showModal, setShowModal] = useState(false);
//   console.log(from, to);
//   // Debounce effect
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setSearch(debouncedSearch);
//       fetchRepayments(1, debouncedSearch, status);
//     }, 500); // 500ms delay

//     return () => clearTimeout(handler); // cleanup previous timer
//   }, [debouncedSearch]);

//   const handleSearchChange = (e) => {
//     setDebouncedSearch(e.target.value);
//   };
//   const handleStatusChange = (value) => {
//     setStatus(value == "all" ? "" : value);
//   };
//   useEffect(() => {
//     fetchRepayments(currentPage, search, status);
//   }, []);
//   useEffect(() => {
//     fetchRepayments(1, debouncedSearch, status);
//   }, [status]);
//   //exportToExcel();
//   //useEffect(() => {}, []);
//   const downloadExport = () => {
//     exportToExcel();
//   };

//   const handleSearch = () => {
//     fetchRepayments(currentPage, search, status, to, from);
//   };
//   return (
//     <div className="container mx-auto py-5 shadow rounded bg-white ">
//       <div className="flex justify-end p-3">
//         <Button onClick={() => setShowModal(true)}>
//           <Plus />
//           Create
//         </Button>
//       </div>
//       <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-2 p-3 ">
//         <div className="w-[100%]">
//           <Input
//             type="text"
//             placeholder="Search contribution..."
//             value={debouncedSearch}
//             onChange={handleSearchChange}
//           />
//         </div>
//         <div className="w-[100%]">
//           <DatePickerWithRange setDateRange={setDateRange} />
//         </div>
//         <div className="">
//           <Button
//             variant="outline"
//             className="w-[100%]"
//             onClick={downloadExport}
//           >
//             {exportLoading ? "loading..." : "Export Contribution"}
//           </Button>
//         </div>

//         <div className="w-[100%]">
//           <Select onValueChange={handleStatusChange}>
//             <SelectTrigger className="w-[100%]">
//               <SelectValue placeholder="Select Status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="pending">Pending</SelectItem>
//               <SelectItem value="processing">Processing</SelectItem>
//               <SelectItem value="completed">Completed</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         {/* <div className="justify-self-end">
//           <Button size="lg">
//             <Plus className="text-bold" /> Create
//           </Button>
//         </div> */}
//       </div>
//       <DataTables
//         columns={repaymentColumns}
//         data={repayments}
//         fetchPage={fetchRepayments}
//         meta={meta}
//       />
//       <CreateRepayment setShowModal={setShowModal} showModal={showModal}/>
//     </div>
//   );
// }

import { DataTables } from "@/components/tables/data-table";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
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
// import { loanColumns } from "./loanColumns/loanColumns";
// import loanStore from "../adminStore/loanStore";
import repaymentStore from "../adminStore/repaymentStore";
import { repaymentColumns } from "./repaymentColumns/repaymentColumns";
import { DatePickerWithRange } from "@/components/date_pickers/datePickerWithRange";
import { CreateRepayment } from "./create/page";
import { useRepayment } from "./hooks/fetchData";
import { Pagination } from "./hooks/pagination";
import { debounce } from "lodash";
import { AdminDataTables } from "@/components/tables/admin-table";

export default function RepaymentPage() {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { repayments, pagination, isLoading } = useRepayment({
    page,
    search,
    status,
    from_date: fromDate,
    to_date: toDate,
  });
  console.log(pagination);
  const debouncedSearch = useCallback(
    debounce((val) => {
      setSearch(val);
      setPage(1);
    }, 500),
    []
  );
  const handleStatusChange = (value) => {
    setStatus(value == "all" ? "" : value);
  };
  useEffect(() => {
    debouncedSearch(searchInput);
  }, [searchInput, debouncedSearch]);

  useEffect(() => {
    setPage(1);
  }, [status, fromDate, toDate]);
  return (
    <div className="container mx-auto py-5 shadow rounded bg-white ">
      <div className="flex justify-end p-3">
        <Button onClick={() => setShowModal(true)}>
          <Plus />
          Create
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-2 p-3 ">
        <div className="w-[100%]">
          <Input
            type="text"
            placeholder="Search contribution..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        {/* <div className="w-[100%]">
          <DatePickerWithRange setDateRange={setDateRange} />
        </div> */}
        {/* <div className="">
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
      <AdminDataTables
        columns={repaymentColumns}
        data={repayments}
        // fetchPage={fetchRepayments}
        meta={pagination}
      />
      <CreateRepayment setShowModal={setShowModal} showModal={showModal} />
      <div className="flex justify-between items-center space-x-2 p-3">
        <div>
          {pagination && (
            <div className="text-sm text-gray-600 mb-2">
              Showing page {pagination.current_page} of {pagination.last_page}(
              {pagination.total} total results )
            </div>
          )}
        </div>
        <Pagination
          currentPage={pagination?.current_page ?? 1}
          lastPage={pagination?.last_page ?? 1}
          onPageChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}

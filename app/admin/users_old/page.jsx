// "use client";

// import { columns } from "@/components/tables/columns";
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

// import { usersColumns } from "@/app/admin/users/usersColumns/usersColumns";
// import userStores from "../adminStore/userStore";

// export default function UserPage() {
//   const {
//     fetchUsers,
//     users,
//     meta,
//     currentPage,
//     search,
//     setStatus,
//     status,
//     setSearch,
//     exportToExcel,
//     exportLoading,
//     loading,
//   } = userStores();

//   const [debouncedSearch, setDebouncedSearch] = useState(search);

//   // Debounce effect
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setSearch(debouncedSearch);
//       fetchUsers(1, debouncedSearch, status);
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
//     fetchUsers(currentPage, search, status);
//   }, []);
//   useEffect(() => {
//     fetchUsers(1, debouncedSearch, status);
//   }, [status]);
//   //exportToExcel();
//   //useEffect(() => {}, []);
//   const downloadExport = () => {
//     exportToExcel();
//   };
//   return (
//     <div className="container mx-auto py-5 shadow rounded bg-white ">
//       {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3 p-3">
//         <div className="w-[100%]">
//           <Input
//             type="text"
//             placeholder="Search contribution..."
//             value={debouncedSearch}
//             onChange={handleSearchChange}
//           />
//         </div>
//         <div className="w-[100%]">
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
//               <SelectItem value="enable">Enable</SelectItem>
//               <SelectItem value="disable">Disable</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="w-[100%]">
//           <Button size="lg" className="w-[100%]">
//             <Plus className="text-bold" /> Create
//           </Button>
//         </div>
//       </div> */}
//       <DataTables
//         columns={usersColumns}
//         data={users}
//         fetchPage={fetchUsers}
//         meta={meta}
//         loading={loading}
//       />
//     </div>
//   );
// }

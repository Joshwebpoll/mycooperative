"use client";

import React, { useEffect } from "react";
import memberStore from "../userStore/memberStore";
import { createColumnHelper } from "@tanstack/react-table";
import DataTable from "@/components/DataTable";
import { DataTableDemo } from "../interest/page";
import { DahboardCards } from "@/components/dashboardCard/dashboardCard";
// const data = [
//   {
//     id: 1,
//     name: "Alice Smith",
//     email: "alice@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 2,
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     email: "john@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 4,
//     name: "Alice Smith",
//     email: "alice@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 5,
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 6,
//     name: "John Doe",
//     email: "john@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 7,
//     name: "Alice Smith",
//     email: "alice@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 8,
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 9,
//     name: "John Doe",
//     email: "john@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 10,
//     name: "Alice Smith",
//     email: "alice@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 11,
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     location: "alice@example.com",
//   },
//   {
//     id: 12,
//     name: "John Doe",
//     email: "john@example.com",
//     location: "alice@example.com",
//   },
// ];

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: "membership_number",
    header: "Membership_number",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "membership_number",
    header: "Membership Number",
    cell: (info) => (
      <span className="font-medium text-blue-700">{info.getValue()}</span>
    ),
  },
  {
    accessorKey: "full_name",
    header: "Full Name",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "id_number",
    header: "Member Id",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "total_shares",
    header: "Total Shares",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "total_savings",
    header: "Total Savings",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <button
          onClick={() => alert(`Editing ${row.original.name}`)}
          className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => alert(`Deleting ${row.original.name}`)}
          className="text-sm bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    ),
  },
];
const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
        <div className=" rounded ">
          <DahboardCards />
        </div>
        <div className=" rounded ">
          <DahboardCards />
        </div>
        <div className=" rounded ">
          <DahboardCards />
        </div>
        <div className=" rounded ">
          <DahboardCards />
        </div>
        <div className=" rounded ">
          <DahboardCards />
        </div>
        <div className=" rounded ">
          <DahboardCards />
        </div>
      </div>
      {/* <DahboardCards /> */}
    </div>

    // <div className="flex flex-1 flex-col">
    //   <div className="@container/main flex flex-1 flex-col gap-2">
    //     <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
    //       <DahboardCards />
    //       <div className="px-4 lg:px-6">{/* <ChartAreaInteractive /> */}</div>
    //       {/* <DataTable data={data} /> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dashboard;

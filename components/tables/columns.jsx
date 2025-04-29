"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { ArrowUpDown, MoreHorizontal, Pen, Pencil, Trash2 } from "lucide-react";
import { FaRegEdit } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";

export const columns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "transaction_id",
    header: "Transaction Id",
  },
  {
    accessorKey: "contribution_type",
    header: "Contribution",
  },
  {
    accessorKey: "amount_contributed",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount_contributed"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "account_number",
    header: "Account Number",
  },
  {
    accessorKey: "contribution_date",
    header: "Date",
  },
  // {
  //   accessorKey: "status",
  //   header: "Status",
  //   ceil: ({ row }) => {
  //     const statuss = row.getValue("status");
  //     console.log(statuss);
  //     const statusStyles = {
  //       pending: "bg-yellow-100 text-yellow-800",
  //       completed: "bg-red-100 text-red-800",
  //     };

  //     return (
  //       <Badge
  //         className={`${
  //           row.getValue("status") == "completed"
  //             ? "bg-amber-300"
  //             : "bg-amber-950"
  //         }`}
  //       >
  //         {row.getValue("status")}
  //       </Badge>
  //     );
  //   },
  // },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      // <div
      //   className={`${row.getValue("status") == "pending" ? "bg-red-600" : ""}`}
      // >
      //   {row.getValue("status")}
      // </div>
      <Badge
        className={`${
          row.getValue("status") == "pending"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {row.getValue("status").charAt(0).toUpperCase() +
          row.getValue("status").slice(1)}
      </Badge>
    ),
  },

  {
    accessorKey: "contribution_deposit_type",
    header: "Deposit Type",
  },
  // {
  //   accessorKey: "Action",
  //   header: "Action",
  //   cell: ({ row }) => (
  //     <div className="flex  justify-between">
  //       <div>
  //         <Trash2 />
  //       </div>
  //       <div>
  //         <Pen className="w-4 h-4 text-muted-foreground" />
  //       </div>
  //     </div>
  //   ),
  // },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const contribution = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => alert(contribution.id)}>
              View contribution
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`contribution/edit/${contribution.id}`}>
                Edit <Trash2 />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Delete <Pencil />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

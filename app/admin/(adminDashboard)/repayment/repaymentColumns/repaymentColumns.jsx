"use client";

import { ColumnDef } from "@tanstack/react-table";

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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export const repaymentColumns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "transaction_reference",
    header: "Transaction Reference",
  },

  {
    accessorKey: "repayment_amount",
    header: "Repayment Amount",
  },

  {
    accessorKey: "payment_method",
    header: "Payment Method",
  },
  //   {
  //     accessorKey: "duration_months",
  //     header: "Duration",
  //     cell: ({ row }) => {
  //       const month = row.getValue("duration_months");

  //       return <div className="text-right font-medium">{month} month</div>;
  //     },
  //   },
  {
    accessorKey: "created_at",
    header: "Date Created",
    cell: ({ row }) => {
      const formatted = format(
        new Date(row.getValue("created_at")),
        "MMMM d, yyyy h:mm a"
      );

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "remaining_balance",
    header: "Remaining Balance",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("remaining_balance"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

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

    cell: ({ row }) => {
      let activeCol = "";
      if (row.getValue("status") === "pending") {
        activeCol = "bg-yellow-100 text-yellow-800";
      } else if (row.getValue("status") === "completed") {
        activeCol = "bg-green-100 text-green-800";
      } else if (row.getValue("status") === "processing") {
        activeCol = "bg-violet-100 text-violet-800";
      }
      return (
        <Badge
          // variant={`${
          //   row.getValue("status") == "disable" ? "destructive" : ""
          // }`}
          className={`${activeCol}`}
        >
          {row.getValue("status").charAt(0).toUpperCase() +
            row.getValue("status").slice(1)}
        </Badge>
      );
    },
  },

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
              Edit <Trash2 />
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

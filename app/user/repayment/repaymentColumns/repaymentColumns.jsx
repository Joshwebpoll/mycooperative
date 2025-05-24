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
import { useState } from "react";
import { CustomDetailsDialog } from "@/components/veiwdetailsmodal/dialogModal";

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

    cell: ({ row }) => {
      return (
        <div className="font-medium">₦{row.getValue("repayment_amount")}</div>
      );
    },
  },

  {
    accessorKey: "created_at",
    header: "Date Created",
    cell: ({ row }) => {
      const formatted = format(
        new Date(row.getValue("created_at")),
        "MMMM d, yyyy h:mm a"
      );

      return <div className="font-medium">{formatted}</div>;
    },
  },

  // {
  //   accessorKey: "remaining_balance",
  //   header: "Remaining Balance",
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("remaining_balance"));

  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat("en-NG", {
  //       style: "currency",
  //       currency: "NGN",
  //     }).format(amount);

  //     return <div className="text-right font-medium">{formatted}</div>;
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
      const repayment = row.original;

      const [open, setOpen] = useState(false);
      const formattedRemainig = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(repayment.remaining_balance);
      const form = format(
        new Date(repayment.created_at),
        "MMMM do yyyy, hh:mm:ss a"
      );
      const dueDate = format(
        new Date(repayment.due_date),
        "MMMM do yyyy, hh:mm:ss a"
      );
      return (
        <div>
          <Button
            onClick={() => setOpen(true)}
            variant="ghost"
            className="h-8 w-8 p-0"
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
          <CustomDetailsDialog
            open={open}
            onOpenChange={setOpen}
            title="Repayment"
            // description="Basic information about the user."
            footer={
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            }
          >
            <div className="space-y-4 text-sm ">
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">
                  Payment Method
                </h1>
                <p className="capitalize">{repayment.payment_method}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">
                  Remaining Balance
                </h1>
                <p>₦{repayment.remaining_balance}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">
                  Next Due Date
                </h1>
                <p>{dueDate}</p>
              </div>
              <hr />

              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">
                  date/time
                </h1>
                <p>{form}</p>
              </div>
            </div>
          </CustomDetailsDialog>
        </div>
      );
    },
  },
];

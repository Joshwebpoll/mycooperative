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
import { CustomDetailsDialog } from "@/components/veiwdetailsmodal/dialogModal";
import { useState } from "react";
import { format } from "date-fns";

export const loanColumns = [
  {
    accessorKey: "id",
    header: "Id",
  },

  {
    accessorKey: "loan_number",
    header: "Loan Id",
  },
  // {
  //   accessorKey: "interest_rate",
  //   header: "Interest (%)",
  // },

  {
    accessorKey: "duration_months",
    header: "Duration",
    cell: ({ row }) => {
      const month = row.getValue("duration_months");

      return <div className=" font-medium">{month} month</div>;
    },
  },
  {
    accessorKey: "monthly_repayment",
    header: "Monthly Repayment",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("monthly_repayment"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "total_payable",
    header: "Total Payable",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_payable"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
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

  //     return <div className=" font-medium">{formatted}</div>;
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
      } else if (row.getValue("status") === "rejected") {
        activeCol = "bg-rose-100 text-rose-800";
      } else if (row.getValue("status") === "Approved") {
        activeCol = "bg-emerald-100 text-emerald-800";
      } else if (row.getValue("status") === "defaulted") {
        activeCol = "bg-neutral-100 text-neutral-800";
      } else if (row.getValue("status") === "disbursed") {
        activeCol = "bg-indigo-100 text-indigo-800";
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
      const loan = row.original;
      console.log(loan);
      const [open, setOpen] = useState(false);
      console.log(open);
      //  Format the amount as a dollar amount
      const formattedRemaining = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(loan.remaining_balance);
      //format balance
      const formattedamount = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(loan.amount);
      //format date

      // const formattedDate = format(
      //   new Date(row.getValue(loan?.created_at)),
      //   "MMMM d, yyyy h:mm a"
      // );
      const form = format(
        new Date(loan.created_at),
        "MMMM do yyyy, hh:mm:ss a"
      );
      // console.log(
      //   format(new Date(row.getValue(loan?.created_at)), "MMMM d, yyyy h:mm a")
      // );
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
            title="Loan Application"
            // description="Basic information about the user."
            footer={
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            }
          >
            <div className="space-y-4 text-sm ">
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">Interest Rate</h1>
                <p>{loan.interest_rate}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px]">Remaining Balance</h1>
                <p>{formattedRemaining}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px]">Amount Requested</h1>
                <p>{formattedamount}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px]">date/time</h1>
                <p>{form}</p>
              </div>
            </div>
          </CustomDetailsDialog>
        </div>
      );
    },
  },
];

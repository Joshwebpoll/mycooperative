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
import { CustomDetailsDialog } from "../veiwdetailsmodal/dialogModal";
import { useState } from "react";
import { format } from "date-fns";

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
    accessorKey: "amount_contributed",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount_contributed"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "account_number",
    header: "Account Number",
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
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const contribution = row.original;
      const [open, setOpen] = useState(false);
      const dueDate = format(
        new Date(contribution.contribution_date),
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
            title="Contribution"
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
                  Deposit Type
                </h1>
                <p className="capitalize">
                  {contribution.contribution_deposit_type}
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">
                  Contribution
                </h1>
                <p>{contribution.contribution_type}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">Date</h1>
                <p>{dueDate}</p>
              </div>
              <hr />

              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">
                  Reference Number
                </h1>
                <p>{contribution.reference_number}</p>
              </div>
            </div>
          </CustomDetailsDialog>
        </div>
      );
    },
  },
];

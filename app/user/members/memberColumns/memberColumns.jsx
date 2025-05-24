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
import { CustomDetailsDialog } from "@/components/veiwdetailsmodal/dialogModal";
import { useState } from "react";

export const membersColumns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "membership_number",
    header: "Member Number",
  },

  {
    accessorKey: "full_name",
    header: "Full Name",
  },

  // {
  //   accessorKey: "id_number",
  //   header: "Id Number",
  // },

  {
    accessorKey: "total_shares",
    header: "Total Shares",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_shares"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return (
        <div className=" font-medium">₦{row.getValue("total_shares")}</div>
      );
    },
  },
  {
    accessorKey: "total_savings",
    header: "Total Savings",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_savings"));

      return (
        <div className=" font-medium">₦{row.getValue("total_savings")}</div>
      );
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
      if (row.getValue("status") === "active") {
        activeCol = "bg-green-100 text-green-800";
      } else if (row.getValue("status") === "inactive") {
        activeCol = "bg-gray-100 text-gray-800";
      } else if (row.getValue("status") === "suspended") {
        activeCol = "bg-red-100 text-red-800";
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
  // {
  //   accessorKey: "created_at",
  //   header: "Date Created",
  //   cell: ({ row }) => {
  //     const formatted = format(
  //       new Date(row.getValue("created_at")),
  //       "MMMM d, yyyy h:mm a"
  //     );

  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const member = row.original;
      const [open, setOpen] = useState(false);
      // const formattedRemainig = new Intl.NumberFormat("en-NG", {
      //   style: "currency",
      //   currency: "NGN",
      // }).format(repayment.remaining_balance);
      const form = format(
        new Date(member.created_at),
        "MMMM do yyyy, hh:mm:ss a"
      );
      const joiningDate = format(
        new Date(member.joining_date),
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
                  Id Number
                </h1>
                <p className="capitalize">{member.id_number}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">
                  Date Joined
                </h1>
                <p>{joiningDate}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">
                  Email
                </h1>
                <p>{member.email}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="uppercase text-[12.5px] text-[#8798AD]">
                  Phone
                </h1>
                <p>{member.phone}</p>
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

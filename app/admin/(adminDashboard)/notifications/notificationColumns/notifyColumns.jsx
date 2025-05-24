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

export const notificationColumns = [
  {
    accessorKey: "id",
    header: "Id",
  },

  //   {
  //     accessorKey: "email",
  //     header: "Email",
  //     cell: ({ row }) => {
  //       const notification = row.original;
  //       return (
  //         <div className="capitalize font-medium">
  //           {referraldetails.referral.email}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "name",
  //     header: "First Name",
  //     cell: ({ row }) => {
  //       const referraldetails = row.original;
  //       return (
  //         <div className="capitalize font-medium">
  //           {referraldetails.referral.name}
  //         </div>
  //       );
  //     },
  //   },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const titles = row.original;
      return <div className="font-medium">{titles?.notifiable?.email}</div>;
    },
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => {
      const titles = row.original;
      return <div className="font-medium">{titles?.notifiable?.username}</div>;
    },
  },

  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      function truncateText(text, maxLength = 100) {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "...";
      }

      const titles = row.original;
      return <div className=" capitalize font-medium">{titles.data.title}</div>;
    },
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => {
      function shortenText(text, maxLength = 20) {
        if (!text) return "";
        return text.length > maxLength
          ? text.slice(0, maxLength) + "..."
          : text;
      }

      const titles = row.original;
      return (
        <div className=" capitalize font-medium">
          {shortenText(titles.data.message, 15)}
        </div>
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

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  //   {
  //     accessorKey: "reward_amount",
  //     header: "Referral Amount",
  //     cell: ({ row }) => {
  //       const amount = parseFloat(row.getValue("reward_amount"));

  //       // Format the amount as a dollar amount
  //       const formatted = new Intl.NumberFormat("en-NG", {
  //         style: "currency",
  //         currency: "NGN",
  //       }).format(amount);

  //       return <div className=" font-medium">{formatted}</div>;
  //     },
  //   },
  //   {
  //     accessorKey: "paid_at",
  //     header: "Paid On",
  //     cell: ({ row }) => {
  //       const asUserContributeds = row.getValue("paid_at");
  //       return (
  //         <div className=" capitalize font-medium">
  //           {asUserContributeds === null ? "Not Paid" : asUserContributeds}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     accessorKey: "status",
  //     header: ({ column }) => {
  //       return (
  //         <Button
  //           variant="ghost"
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         >
  //           Status
  //           <ArrowUpDown className="ml-2 h-4 w-4" />
  //         </Button>
  //       );
  //     },

  //     cell: ({ row }) => {
  //       let activeCol = "";
  //       if (row.getValue("status") === "pending") {
  //         activeCol = "bg-yellow-100 text-yellow-800";
  //       } else if (row.getValue("status") === "completed") {
  //         activeCol = "bg-green-100 text-green-800";
  //       } else if (row.getValue("status") === "rejected") {
  //         activeCol = "bg-rose-100 text-rose-800";
  //       } else if (row.getValue("status") === "Approved") {
  //         activeCol = "bg-emerald-100 text-emerald-800";
  //       } else if (row.getValue("status") === "defaulted") {
  //         activeCol = "bg-neutral-100 text-neutral-800";
  //       } else if (row.getValue("status") === "paid") {
  //         activeCol = "bg-indigo-100 text-indigo-800";
  //       }
  //       return (
  //         <Badge className={`${activeCol}`}>
  //           {row.getValue("status").charAt(0).toUpperCase() +
  //             row.getValue("status").slice(1)}
  //         </Badge>
  //       );
  //     },
  //   },

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

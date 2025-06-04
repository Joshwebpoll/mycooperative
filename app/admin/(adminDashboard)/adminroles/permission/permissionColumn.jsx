"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  ArrowUpDown,
  Delete,
  Edit,
  MoreHorizontal,
  Pen,
  Pencil,
  Trash2,
} from "lucide-react";
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
import Link from "next/link";
import { format } from "date-fns";
import adminRoleStore from "../../adminStore/adminroleStore";

export const PermissionColumns = [
  // {
  //   accessorKey: "id",
  //   header: "Id",
  // },

  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "guard_name",
    header: "Guard Name",
  },
  {
    header: "Role",
    cell: ({ row }) => {
      const permission = row.original || [];

      return (
        <>
          {permission?.roles?.map((role) => (
            <div key={role.id}>{role.name}</div>
          ))}
        </>
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
  //   accessorKey: "status",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Status
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },

  //   cell: ({ row }) => {
  //     let activeCol = "";
  //     if (row.getValue("status") === "pending") {
  //       activeCol = "bg-yellow-100 text-yellow-800";
  //     } else if (row.getValue("status") === "enable") {
  //       activeCol = "bg-green-100 text-green-800";
  //     } else if (row.getValue("status") === "disable") {
  //       activeCol = "bg-rose-100 text-rose-800";
  //     } else if (row.getValue("status") === "Approved") {
  //       activeCol = "bg-emerald-100 text-emerald-800";
  //     } else if (row.getValue("status") === "defaulted") {
  //       activeCol = "bg-neutral-100 text-neutral-800";
  //     } else if (row.getValue("status") === "disbursed") {
  //       activeCol = "bg-indigo-100 text-indigo-800";
  //     }
  //     return (
  //       <Badge
  //         // variant={`${
  //         //   row.getValue("status") == "disable" ? "destructive" : ""
  //         // }`}
  //         className={`${activeCol}`}
  //       >
  //         {row.getValue("status").charAt(0).toUpperCase() +
  //           row.getValue("status").slice(1)}
  //       </Badge>
  //     );
  //   },
  // },
  {
    header: "Action",
    cell: ({ row }) => {
      const deletePermission = adminRoleStore(
        (state) => state.deletePermission
      );
      const permission = row.original;

      return (
        <div>
          {/* <Link href={`permission/permission_details/${permission.name}`}>
            <Edit />
          </Link> */}
          <Trash2 size={18} onClick={() => deletePermission(permission.id)} />
        </div>
      );
    },
  },

  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const loan = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem onClick={() => alert(loan.id)}>
  //             View contribution
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>
  //             <Link href={`loan/edit/${loan.id}`}>
  //               Edit <Trash2 />
  //             </Link>
  //           </DropdownMenuItem>
  //           <DropdownMenuItem>
  //             Delete <Pencil />
  //           </DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];

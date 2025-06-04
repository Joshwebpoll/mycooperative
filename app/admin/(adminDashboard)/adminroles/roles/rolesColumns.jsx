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
import Link from "next/link";
import { format } from "date-fns";
import adminRoleStore from "../../adminStore/adminroleStore";

export const RolesColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "guard_name",
    header: "Guard Name",
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

  {
    header: "Action",
    cell: ({ row }) => {
      const deleteRoles = adminRoleStore((state) => state.deleteRoles);
      const roles = row.original;

      return (
        <div>
          <Trash2
            size={20}
            className="text-red-500"
            onClick={() => deleteRoles(roles.id)}
          />
        </div>
      );
    },
  },
];

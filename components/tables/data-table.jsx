"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { columns } from "./columns";
import { Button } from "../ui/button";

import { useState } from "react";
import Loading from "../loading_spinner/loading";
import { Empty, Spin } from "antd";
import LoadingOverlay from "../loadingOvalay/loadingOverlay";

export function DataTables({ columns, data, fetchPage, meta, loading }) {
  const [sorting, setSorting] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  function getPaginationRange(currentPage, lastPage, delta = 1) {
    const range = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(lastPage - 1, currentPage + delta);

    range.push(1); // always show first

    if (left > 2) range.push("...");

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < lastPage - 1) range.push("...");

    if (lastPage > 1) range.push(lastPage); // always show last

    return range;
  }

  return (
    <div className=" bg-white p-3 relative ">
      <Table>
        <TableHeader className="bg-[#f6f8fb] text-[14px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="py-3 text-[13.5px]">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="py-4 text-[13px] text-gray-800"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                <Empty
                  style={{ image: { height: 40 } }}
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {Object.keys(meta).length === 0 ? (
        ""
      ) : (
        <div className="flex justify-between items-center space-x-2 py-4">
          {/* Info */}
          <div className="text-sm text-muted-foreground">
            Showing <b>{meta.from}</b> to <b>{meta.to}</b> of{" "}
            <b>{meta.total}</b> records
          </div>

          <div className="flex gap-2 mt-4">
            <Button
              onClick={() => fetchPage(meta.current_page - 1)}
              disabled={meta.current_page <= 1}
            >
              Previous
            </Button>

            {getPaginationRange(meta.current_page, meta.last_page).map(
              (page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 text-muted-foreground"
                  >
                    ...
                  </span>
                ) : (
                  <Button
                    key={`page-${page}`} // ✅ unique key
                    size="sm"
                    variant={page === meta.current_page ? "default" : "outline"}
                    onClick={() => fetchPage(page)}
                  >
                    {page}
                  </Button>
                )
            )}
            <Button
              onClick={() => fetchPage(meta.current_page + 1)}
              disabled={meta && meta.current_page >= meta.last_page}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

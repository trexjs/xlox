"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setPage: Function;
  page: number;
  totalRows: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  setPage,
  page,
  totalRows,
}: DataTableProps<TData, TValue>) {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const noOfPages = Math.ceil(totalRows / 10);

  useEffect(() => {
    if (noOfPages === page) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (page === 1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [noOfPages, page]);

  // Creating an array with length equal to no.of pages
  // const pagesArr = [...new Array(noOfPages)];
  // Onclick handlers for the butons
  const onNextPage = () => setPage(page + 1);
  const onPrevPage = () => setPage(page - 1);
  // const onPageSelect = (pageNo: number) => setPage(pageNo);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
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
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 mx-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPrevPage()}
          disabled={!canGoBack}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNextPage()}
          disabled={!canGoNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

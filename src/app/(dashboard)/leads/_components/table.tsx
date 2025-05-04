"use client";
import { DataTable } from "@/components/ui/data-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { tableColumns } from "./table-columns";
import { useLeads } from "@/hooks/leads";
import { FindLeadsQuery } from "@/lib/api/leads/find-leads";
import { Pagination } from "./pagination";

type TableProps = {
  searchParams: FindLeadsQuery;
};

export const Table = ({ searchParams }: TableProps) => {
  const { isFetching, data } = useLeads(searchParams);
  const table = useReactTable({
    data: data?.data?.data ?? [],
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div className="flex-1 h-full overflow-y-auto">
        <DataTable table={table} isLoading={isFetching} />
      </div>
      <Pagination
        currentPage={searchParams?.page ?? 1}
        totalPages={data?.data?.total_pages ?? 1}
      />
    </>
  );
};

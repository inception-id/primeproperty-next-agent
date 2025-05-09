"use client";

import { useAgents } from "@/hooks/agents/use-agents";
import { FindAgentsQuery } from "@/lib/api/agents/find-agents";
import { DataTable } from "@/components/ui/data-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { tableColumns } from "./table-columns";
import { Pagination } from "./pagination";

type AgentsTableProps = {
  searchParams: FindAgentsQuery;
};

export const AgentsTable = ({ searchParams }: AgentsTableProps) => {
  const { data, isFetching } = useAgents(searchParams);

  const table = useReactTable({
    data: data?.data?.data ?? [],
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="flex-1 h-full overflow-y-auto">
        <DataTable isLoading={isFetching} table={table} />
      </div>
      <Pagination
        currentPage={searchParams.page ?? 1}
        totalPages={data?.data?.total_pages ?? 1}
      />
    </>
  );
};

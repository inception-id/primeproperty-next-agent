"use client";
import { useProperties } from "@/hooks";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { getTableColumns } from "./table-columns";
import { DataTable } from "@/components/ui/data-table";
import { useAgentTokenData } from "@/hooks/agents/use-agent-token-data";

export const PropertiesTable = () => {
  const agent = useAgentTokenData();
  const property = useProperties({ is_popular: "true" });

  const table = useReactTable({
    data: property.data?.data?.data ?? [],
    columns: getTableColumns(agent?.data?.role),
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <DataTable
      table={table}
      isLoading={agent.isLoading || property.isFetching}
    />
  );
};

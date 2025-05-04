import { Lead } from "@/lib/api/leads/find-leads";
import { formatDateToIndonesian } from "@/lib/date-time/format-date-to-indonesian";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ContactLeadDialog } from "./contact-lead-dialog";
import { env } from "@/lib/env";

export const tableColumns: ColumnDef<Lead>[] = [
  {
    header: "id",
    accessorKey: "id",
  },
  {
    header: "Property ID",
    accessorKey: "property_id",
    cell: ({ row }) => {
      return (
        <Link
          href={`${env.NEXT_PUBLIC_CLIENT_URL}/properties/${row.original.property_id}`}
          className="underline underline-offset-4"
          target="_blank"
        >
          {row.original.property_id}
        </Link>
      );
    },
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Phone",
    accessorKey: "phone_number",
    cell: ({ row }) => {
      return (
        <ContactLeadDialog
          propertyId={row.original.property_id}
          name={row.original.name}
          phone={row.original.phone_number}
        />
      );
    },
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Created",
    accessorKey: "created_at",
    cell: ({ row }) => {
      return formatDateToIndonesian(row.original.created_at, true);
    },
  },
];

import { FindLeadsQuery } from "@/lib/api/leads/find-leads";
import { Table } from "./_components";
import { Filter } from "./_components/filter";

type LeadsPageProps = {
  searchParams: FindLeadsQuery;
};

const LeadsPage = ({ searchParams }: LeadsPageProps) => {
  return (
    <div className="h-full p-4 flex flex-col gap-4">
      <Filter searchParams={searchParams} />
      <Table searchParams={searchParams} />
    </div>
  );
};

export default LeadsPage;

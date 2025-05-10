import { PropertiesTable } from "./_components";
import { AddDialog } from "./_components/add-dialog";

export const revalidate = 0;

const PopularPropertiesPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Popular Properties</h1>
        <AddDialog />
      </div>

      <PropertiesTable />
    </div>
  );
};

export default PopularPropertiesPage;

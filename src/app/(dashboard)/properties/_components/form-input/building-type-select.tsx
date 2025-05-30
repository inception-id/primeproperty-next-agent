import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BUILDING_TYPES } from "@/lib/enums/building-type";

type BuildingTypeSelectProps = {
  defaultValue?: string;
};

export const BuildingTypeSelect = ({
  defaultValue,
}: BuildingTypeSelectProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="building_type">
        Tipe Properti
        <span className="text-red-500 ml-1">(*)</span>
      </Label>
      <Select name="building_type" defaultValue={defaultValue}>
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Pilih Tipe Properti" />
        </SelectTrigger>
        <SelectContent>
          {BUILDING_TYPES.map((building, index) => (
            <SelectItem
              key={`${index}_${building.value}`}
              value={building.value}
              className="capitalize"
            >
              {building.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

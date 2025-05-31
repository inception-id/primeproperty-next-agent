import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BUILDING_CONDITIONS } from "@/lib/enums/building-condition";

type BuildingConditionSelectProps = {
  defaultValue?: string;
};

export const BuildingConditionSelect = ({
  defaultValue,
}: BuildingConditionSelectProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="building_condition">
        Kondisi Properti
        <span className="text-red-500 ml-1">(*)</span>
      </Label>
      <Select name="building_condition" defaultValue={defaultValue}>
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Pilih Kondisi Properti" />
        </SelectTrigger>
        <SelectContent>
          {BUILDING_CONDITIONS.map((building, index) => (
            <SelectItem
              key={`${index}_${building.value}`}
              value={building.value}
              className="capitalize"
            >
              {building.indonesian_label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

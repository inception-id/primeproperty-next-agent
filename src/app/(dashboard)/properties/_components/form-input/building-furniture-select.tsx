import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FURNITURE_CAPACITIES } from "@/lib/enums/furniture-capacity";

type BuildingFurnitureSelectProps = {
  defaultValue?: string;
};

export const BuildingFurnitureSelect = ({
  defaultValue,
}: BuildingFurnitureSelectProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="building_furniture_capacity">Furniture</Label>
      <Select name="building_furniture_capacity" defaultValue={defaultValue}>
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="-" />
        </SelectTrigger>
        <SelectContent>
          {FURNITURE_CAPACITIES.map((building, index) => (
            <SelectItem
              key={`${index}_${building.value}`}
              value={building.value}
              className="capitalize"
            >
              {building.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

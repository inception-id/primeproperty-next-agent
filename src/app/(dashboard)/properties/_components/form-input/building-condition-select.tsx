import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BUILDING_CONDITIONS } from "@/lib/enums/building-condition";

export const BuildingConditionSelect = () => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="building_condition">Kondisi Properti</Label>
      <Select name="building_condition">
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Baru/Tua" />
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

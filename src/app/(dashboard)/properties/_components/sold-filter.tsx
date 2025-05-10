import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SoldStatus } from "@/lib/api/properties/type";

type SoldFilterProps = {
  defaultValue?: SoldStatus;
  onValueChange: (value: string) => void;
};

export const SoldFilter = ({
  defaultValue,
  onValueChange,
}: SoldFilterProps) => {
  return (
    <Select
      name="sold_status"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="capitalize">
        <SelectValue placeholder="Sold & Available" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0" className="capitalize">
          Sold & Available
        </SelectItem>
        <SelectItem value="Available" className="capitalize">
          Available
        </SelectItem>
        <SelectItem value="Sold" className="capitalize">
          Sold
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

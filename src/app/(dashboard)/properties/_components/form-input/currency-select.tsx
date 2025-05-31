import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CurrencyUnit } from "@/lib/api/properties/type";
import { FaStarOfLife } from "react-icons/fa";

type CurrencySelectProps = {
  defaultValue?: string;
  onValueChange?: (val: CurrencyUnit) => void;
};

export const CurrencySelect = ({
  defaultValue,
  onValueChange,
}: CurrencySelectProps) => {
  return (
    <div className="grid gap-2 md:flex md:flex-col">
      <Label htmlFor="currency">Currency</Label>
      <Select
        name="currency"
        defaultValue={defaultValue ?? CurrencyUnit.IDR}
        onValueChange={(val) => onValueChange?.(val as CurrencyUnit)}
      >
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="IDR" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={CurrencyUnit.IDR}>
            {CurrencyUnit.IDR.toUpperCase()}
          </SelectItem>
          <SelectItem value={CurrencyUnit.USD}>
            {CurrencyUnit.USD.toUpperCase()}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

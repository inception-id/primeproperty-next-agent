import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PURCHASE_STATUS } from "@/lib/enums/purchase-status";
import { FaStarOfLife } from "react-icons/fa";

type PurchaseStatusSelectProps = {
  defaultValue?: string;
  onValueChange?: (val: string) => void;
};

export const PurchaseStatusSelect = ({
  defaultValue,
  onValueChange,
}: PurchaseStatusSelectProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="purchase_status" className="flex gap-1">
        Jual/Sewa
        <FaStarOfLife size={6} className="text-red-500" />
      </Label>
      <Select
        name="purchase_status"
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Pilih jual atau sewa" />
        </SelectTrigger>
        <SelectContent>
          {PURCHASE_STATUS.map((purStatus, index) => (
            <SelectItem
              key={`${index}_${purStatus.value}`}
              value={purStatus.value}
              className="capitalize"
            >
              {purStatus.indonesian_label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

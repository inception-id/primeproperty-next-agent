import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PURCHASE_STATUS } from "@/lib/enums/purchase-status";

type PurchaseStatusSelectProps = {
  defaultValue?: string;
};

export const PurchaseStatusSelect = ({
  defaultValue,
}: PurchaseStatusSelectProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="purchase_status">
        Jual/Sewa
        <span className="text-red-500 ml-1">(*)</span>
      </Label>
      <Select name="purchase_status" defaultValue={defaultValue}>
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Jual/Sewa" />
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

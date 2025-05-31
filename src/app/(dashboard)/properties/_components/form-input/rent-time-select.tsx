import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RentTimeUnit } from "@/lib/api/properties/type";

type RentTimeSelectProps = {
  disabled?: boolean;
  defaultValue?: string;
};

export const RentTimeSelect = ({
  defaultValue,
  disabled,
}: RentTimeSelectProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="rent_time">Waktu Sewa</Label>
      <Select name="rent_time" disabled={disabled} defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder={disabled ? "-" : "Pilih waktu Sewa"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={RentTimeUnit.Monthly} className="capitalize">
            per Bulan
          </SelectItem>
          <SelectItem value={RentTimeUnit.Yearly} className="capitalize">
            per Tahun
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

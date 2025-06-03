import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BpsDomain } from "@/lib/bps/find-bps-domain-province";
import { REGENCIES } from "@/lib/enums/regency";
import { useMemo } from "react";
import { FaStarOfLife } from "react-icons/fa";

type ProvinceRegencyProps = {
  provinceId: string;
  isFilter?: boolean;
  onValueChange?: (bpsDomain: BpsDomain | undefined) => void;
  defaultValue?: string;
};

export const ProvinceRegencySelect = ({
  provinceId,
  isFilter,
  onValueChange,
  defaultValue,
}: ProvinceRegencyProps) => {
  const PROVINCE_REGENCY: BpsDomain[] = useMemo(() => {
    if (provinceId) {
      return REGENCIES[provinceId as unknown as keyof typeof REGENCIES];
    }
    return [];
  }, [provinceId]);

  return (
    <div className="grid gap-2 md:flex md:flex-col">
      <Label htmlFor="regency" className={isFilter ? "hidden" : "flex gap-1"}>
        Kabupaten
        <FaStarOfLife size={6} className="text-red-500" />
      </Label>
      <Select
        name="regency"
        defaultValue={defaultValue}
        onValueChange={(value) => {
          if (onValueChange) {
            const selectedRegency = PROVINCE_REGENCY?.find(
              (regency) => regency.nama.toLowerCase() === value,
            );
            onValueChange(selectedRegency);
          }
        }}
      >
        <SelectTrigger disabled={provinceId === ""}>
          <SelectValue
            className="capitalize"
            placeholder={provinceId ? "Pilih kabupaten" : "Pilih provinsi dulu"}
          />
        </SelectTrigger>
        <SelectContent>
          {isFilter && <SelectItem value="-">Semua Kabupaten</SelectItem>}
          {PROVINCE_REGENCY?.map((regency, index) => (
            <SelectItem
              key={`${index}-${regency.id}-${regency.nama}`}
              value={regency.nama.toLowerCase()}
              className="capitalize"
            >
              {regency.nama.toLowerCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

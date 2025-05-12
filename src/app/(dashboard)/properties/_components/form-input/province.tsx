"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BpsDomain } from "@/lib/bps/find-bps-domain-province";
import { PROVINCES } from "@/lib/enums/provinces";
import { useEffect } from "react";

type ProvinceSelectProps = {
  isFilter?: boolean;
  defaultValue?: string;
  onProvinceChange(bpsDomain: BpsDomain | undefined): void;
};

export const ProvinceSelect = ({
  onProvinceChange,
  isFilter,
  defaultValue,
}: ProvinceSelectProps) => {
  useEffect(() => {
    if (defaultValue) {
      const selectedProvince = PROVINCES.find(
        (prov) => prov.domain_name.toLowerCase() === defaultValue,
      );
      onProvinceChange(selectedProvince);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <div className="grid gap-2">
      <Label htmlFor="province" className={isFilter ? "hidden" : ""}>
        Provinsi
        <span className="text-red-500 ml-1">(*SEO)</span>
      </Label>
      <Select
        name="province"
        defaultValue={defaultValue}
        onValueChange={(val) => {
          const selectedProvince = PROVINCES?.find(
            (prov) => prov.domain_name.toLowerCase() === val,
          );
          onProvinceChange(selectedProvince);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Pilih provinsi" />
        </SelectTrigger>
        <SelectContent>
          {isFilter && <SelectItem value="-">Semua Provinsi</SelectItem>}
          {PROVINCES?.map((province, index) => (
            <SelectItem
              key={`${index}_${province.domain_id}`}
              value={province.domain_name.toLowerCase()}
            >
              {province.domain_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

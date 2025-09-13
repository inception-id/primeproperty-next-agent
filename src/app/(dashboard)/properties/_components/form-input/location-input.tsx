"use client";
import { useState } from "react";
import { ProvinceSelect, ProvinceRegencySelect } from "../../_components";

type LocationInputProps = {
  defaultProvinceValue?: string;
  defaultRegencyValue?: string;
};

export const LocationInput = ({
  defaultProvinceValue,
  defaultRegencyValue,
}: LocationInputProps) => {
  const [provinceId, setProvinceId] = useState<string>("");

  return (
    <div className="grid md:grid-cols-2 gap-6 md:col-span-2 md:gap-4">
      <ProvinceSelect
        defaultValue={defaultProvinceValue}
        onProvinceChange={(bpsDomain) => setProvinceId(bpsDomain?.id || "")}
      />
      <ProvinceRegencySelect
        provinceId={provinceId}
        defaultValue={defaultRegencyValue}
      />
    </div>
  );
};

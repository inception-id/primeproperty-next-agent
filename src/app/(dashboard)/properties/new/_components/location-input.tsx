import { useState } from "react";
import { ProvinceSelect, ProvinceRegencySelect } from "../../_components";

export const LocationInput = () => {
  const [provinceId, setProvinceId] = useState<string>("");

  return (
    <div className="grid grid-cols-2 gap-4">
      <ProvinceSelect
        onProvinceChange={(bpsDomain) =>
          setProvinceId(bpsDomain?.domain_id || "")
        }
      />
      <ProvinceRegencySelect provinceId={provinceId} />
    </div>
  );
};

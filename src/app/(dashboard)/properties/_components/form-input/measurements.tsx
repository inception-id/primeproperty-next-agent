import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { MeasurementInput } from "../../_components";

type MeasurementsProps = {
  propertyWithAgent?: PropertyWithAgent;
};

export const Measurements = ({ propertyWithAgent }: MeasurementsProps) => {
  return (
    <div className="grid gap-4">
      <h3 className="text-lg">PROPERTY MEASUREMENTS</h3>
      <div className="grid grid-cols-2 gap-4">
        <MeasurementInput
          label="Luas Tanah"
          unit="m2"
          id="land_area"
          name="land_area"
          defaultValue={propertyWithAgent?.[0].measurements?.land_area}
        />
        <MeasurementInput
          label="Luas Bangunan"
          unit="m2"
          id="building_area"
          name="building_area"
          defaultValue={propertyWithAgent?.[0].measurements?.building_area}
        />
        <MeasurementInput
          label="Tinggi Bangunan"
          unit="lantai"
          id="building_level"
          name="building_level"
          defaultValue={propertyWithAgent?.[0].measurements?.building_level}
        />
        <MeasurementInput
          label="Daya Listrik"
          unit="watt"
          id="electrical_power"
          name="electrical_power"
          defaultValue={propertyWithAgent?.[0].specifications?.electrical_power}
        />
        <MeasurementInput
          label="Kamar Tidur"
          id="bedrooms"
          name="bedrooms"
          defaultValue={propertyWithAgent?.[0].specifications.bedrooms}
        />
        <MeasurementInput
          label="Kamar Mandi"
          id="bathrooms"
          name="bathrooms"
          defaultValue={propertyWithAgent?.[0].specifications.bathrooms}
        />
        <MeasurementInput
          label="Garasi"
          id="garage"
          name="garage"
          defaultValue={propertyWithAgent?.[0].specifications.garage}
        />
        <MeasurementInput
          label="Carport"
          id="carport"
          name="carport"
          defaultValue={propertyWithAgent?.[0].specifications.carport}
        />
      </div>
    </div>
  );
};

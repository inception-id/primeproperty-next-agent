import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { MeasurementInput } from "../../_components";

type SpecificationsProps = {
  propertyWithAgent?: PropertyWithAgent;
};
export const Specifications = ({ propertyWithAgent }: SpecificationsProps) => {
  return <div className="gap-4 grid grid-cols-2 md:grid-cols-4"></div>;
};

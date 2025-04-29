import { findPropertyById } from "@/lib/api/properties/find-property-by-id";
import { useQuery } from "@tanstack/react-query";

export const usePropertyById = (id: number) => {
  return useQuery({
    gcTime: 0,
    queryKey: ["property", id],
    queryFn: async () => await findPropertyById(id),
  });
};

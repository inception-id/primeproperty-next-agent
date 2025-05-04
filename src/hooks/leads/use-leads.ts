import { findLeads, FindLeadsQuery } from "@/lib/api/leads/find-leads";
import { useQuery } from "@tanstack/react-query";

export const useLeads = (query?: FindLeadsQuery) => {
  const useQueryKey = "leads";
  return useQuery({
    gcTime: 0,
    queryKey: [useQueryKey, query],
    queryFn: async () => await findLeads(query),
  });
};

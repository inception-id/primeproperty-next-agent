import { fetchApi } from "../fetch-api";
import { JsonFindApiResponse } from "../types/find-response";

export type Lead = {
  id: number;
  user_id: string;
  property_id: number;
  created_at: string;
  updated_at: string;
  name: string;
  phone_number: string;
  email: string | null;
  is_deleted: boolean;
};

export type FindLeadsQuery = {
  search?: string;
  page?: number;
};

export const findLeads = async (query?: FindLeadsQuery) => {
  let path = "/leads?";
  if (query?.search) {
    path += `&search=${query.search}`;
  }
  if (query?.page) {
    path += `&page=${query.page}`;
  }
  return await fetchApi<JsonFindApiResponse<Lead>>(path);
};

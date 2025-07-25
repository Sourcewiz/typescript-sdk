import { Pagination } from "../core/types.js";

export interface SalesRepListRequest extends Pagination {
  sort_by?: "created_at" | "updated_at" | "first_name" | "last_name";
  sort?: "asc" | "desc";
  status?: "active" | "inactive";
  email?: string;
}

export interface SalesRepResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  created_at: string;
  updated_at: string;
}

import { Pagination } from "../core/types.js";
export interface PriceListRequest extends Pagination {
  sort_by?: "created_at" | "updated_at" | "name";
  sort?: "asc" | "desc";
  status?: "active" | "inactive";
}

export interface PriceListCreateRequest {
  reference_id: string;
  name: string;
  description?: string;
  status: "active" | "inactive";
  is_default: boolean;
  priority: number;
}

export interface PriceListUpdateRequest {
  name?: string;
  description?: string;
  priority?: number;
  status?: "active" | "inactive";
  is_default?: boolean;
}

export interface PriceListResponse {
  id: string;
  reference_id: string;
  name: string;
  description: string;
  status: string;
  currency: string;
  created_at: string;
  updated_at: string;
}

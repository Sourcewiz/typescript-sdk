import { Pagination } from "../core/types.js";
import { AttributeResponse } from "../attribute/types.js";
export interface InventoryRequest extends Pagination {
  sku?: string;
  sort_by?: "created_at" | "updated_at" | "product_id" | "id";
  sort?: "asc" | "desc";
  status?: "active" | "inactive";
}

export interface OnOrderDetails {
  quantity: number;
  date: string;
  identifier: string;
}

export interface InTransitDetails {
  quantity: number;
  date: string;
  identifier: string;
}

export interface InventoryCreateRequest {
  sku: string;
  available_quantity: number;
  reserved_quantity: number;
  in_stock_quantity: number;
  back_order_quantity?: number | null;
  back_order_allowed?: boolean | null;
  out_of_stock_threshold: number;
  inventory_status: "OUT_OF_STOCK" | "IN_STOCK" | "BACK_ORDER";
  track_inventory: boolean;
  on_order_details: OnOrderDetails[];
  in_transit_details: InTransitDetails[];
  dynamic_details?: string | null;
  notes?: string;
  back_order_reserved_quantity?: number;
  back_order_available_quantity?: number;
}

export interface OnOrderDetailsResponse {
  quantity: number;
  date?: string | null;
  identifier: string;
}

export interface InTransitDetailsResponse {
  quantity: number;
  date?: string | null;
  identifier: string;
}

export interface InventoryResponse {
  id: string;
  product_id: string;
  sku: string;
  available_quantity: number;
  reserved_quantity: number;
  in_stock_quantity: number;
  back_order_quantity: number;
  inventory_status: "OUT_OF_STOCK" | "IN_STOCK" | "BACK_ORDER";
  status: "active" | "inactive";
  track_inventory: boolean;
  on_order_details: OnOrderDetailsResponse[];
  in_transit_details: InTransitDetailsResponse[];
  notes: string;
  back_order_allowed: boolean;
  created_at: string;
  updated_at: string;
  attributes?: AttributeResponse[];
}

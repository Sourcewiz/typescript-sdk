import { Pagination } from "../core/types.js";
export interface InvoiceItemCreateRequest {
  reference_id: string;
  sku: string;
  quantity: number;
  amount: number;
  name: string;
  description?: string;
  item_total?: number;
  rate?: number;
  discount?: number;
}

export interface InvoiceCreateRequest {
  reference_id: string;
  order_id: string;
  invoice_number: string;
  total_amount: number;
  paid_amount: number;
  status: "PAID" | "UNPAID";
  due_date: string;
  remarks?: string;
  url?: string;
  created_at?: string;
  updated_at?: string;
  items: InvoiceItemCreateRequest[];
  name?: string;
}

export interface InvoiceUpdateRequest extends InvoiceCreateRequest {}

export interface Invoice {
  reference_id: string;
  order_id: string;
  invoice_number: string;
  total_amount: number;
  paid_amount: number;
  status: "PAID" | "UNPAID";
  due_date: string;
  remarks?: string;
  url?: string;
  created_at?: string;
  updated_at?: string;
  items: InvoiceItemCreateRequest[];
  name?: string;
}

export interface InvoiceListParams extends Pagination {
  reference_ids?: string;
  sort_by?: "created_at" | "updated_at";
  sort?: "asc" | "desc";
  status?: "PAID" | "UNPAID";
}

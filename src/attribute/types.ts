import { Pagination } from "../core/types";

export interface AttributeRequest extends Pagination {
  entity: 'customer' | 'address' | 'contact' | 'order' | 'product';
}

export interface AttributeResponse {
  id: string;
  name: string;
  entity: string;
  data_type: string;
  options: string[];
  created_at: string;
  updated_at: string;
}
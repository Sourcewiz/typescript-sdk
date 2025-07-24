export interface AttributeRequest {
  entity: 'customer' | 'address' | 'contact' | 'order' | 'product';
  page?: number;
  page_size?: number;
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
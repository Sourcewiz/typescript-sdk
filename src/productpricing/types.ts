export interface ProductPriceRequest {
  price_list_id: string;
  price: number;
  min_order_quantity: number;
  max_order_quantity: number;
  step_increment: number;
}

export interface ProductPricingResponse {
  id: string;
  product_id: string;
  price_list_id: string;
  price: number;
  currency: string;
  status: string;
  min_order_quantity: number;
  max_order_quantity: number;
  step_increment: number;
  created_at: string;
  updated_at: string;
}

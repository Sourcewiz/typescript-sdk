export interface PaymentMethodRequest {
  page?: number;
  page_size?: number;
  customer_id?: string;
}

export interface PaymentMethodCreateRequest {
  reference_id: string;
  customer_id: string;
  provider: string;
  external_customer_id?: string;
  payment_method_type: string;
  card_type: string;
  brand: string;
  card_expiry: string;
  last_four_digits: string;
  display_name?: string;
  is_default?: boolean;
  token: string;
  address_line_1?: string;
  address_line_2?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  status?: string;
}

export interface PaymentMethodResponse {
  id: string;
  reference_id: string;
  customer_id: string;
  provider: string;
  payment_method_type: string;
  card_type?: string;
  brand?: string;
  status: string;
  card_expiry?: string;
  last_four_digits?: string;
  display_name?: string;
  token?: string;
  address_line_1?: string;
  address_line_2?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
  updated_at: string;
  is_default: boolean;
}

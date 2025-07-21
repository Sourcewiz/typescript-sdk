export interface Product {
  id: string;
  referenceId: string;
  sku: string;
  name: string;
  groupCode: string;
  medias: ProductMedia[];
  isPrimary: boolean;
  status: "active" | "inactive";
  attributes: Attribute[];
  createdAt: string;
  updatedAt: string;
  priceLists?: ProductPrice[];
}

export interface ProductMedia {
  url: string;
  isDefault: boolean;
  type: string;
}

export interface ProductPrice {
  id: string;
  price: number;
  minOrderQuantity: number;
  maxOrderQuantity: number;
  stepIncrement: number;
  createdAt: string;
  updatedAt: string;
}

export interface Attribute {
  id: string;
  name: string;
  value: string;
}

export interface ProductListRequest {
  page?: number;
  page_size?: number;
  is_primary?: boolean;
  sort?: "asc" | "desc";
  sort_by?: "created_at" | "updated_at" | "name" | "sku_id";
  group_code?: string;
  sku_id?: string;
}

export interface ProductCreateRequest {
  group_code: string;
  grouping_attributes?: string[];
  variants: VariantCreateRequest[];
}

export interface VariantCreateRequest {
  sku_id: string;
  reference_id: string;
  name: string;
  categories?: string[];
  collections?: string[];
  medias?: ProductMedia[];
  attributes?: Attribute[];
  product_prices: ProductPrice[];
  is_primary?: boolean;
  priority?: number;
}

export interface ProductUpdateRequest {
  group_code?: string;
  reference_id?: string;
  name?: string;
  categories?: string[];
  collections?: string[];
  medias?: ProductMedia[];
  attributes?: Attribute[];
  product_prices?: ProductPrice[];
  status?: "inactive";
}
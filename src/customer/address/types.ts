import { Pagination } from "../../core/types.js";
export interface Address {
  id: string;
  customerId: string;
  referenceId: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  country?: string;
  zipCode?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  type: "billing" | "shipping";
  status?: "active" | "inactive";
  isDefault?: boolean;
  attributes?: any[];
  createdAt?: string;
  updatedAt?: string;
}

export interface AddressListRequest extends Pagination {
  customerId?: string;
  referenceIds?: string[];
  sortBy?: "created_at" | "updated_at";
  sort?: "asc" | "desc";
  status?: "active" | "inactive";
}

export interface AddressCreateRequest {
  referenceId: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  country?: string;
  zipCode?: string;
  type: "billing" | "shipping";
  isDefault?: boolean;
  attributes?: any[];
}

export interface AddressUpdateRequest {
  referenceId?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  type?: "billing" | "shipping";
  isDefault?: boolean;
  attributes?: any[];
}

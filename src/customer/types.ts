import { Address, AddressCreateRequest, AddressUpdateRequest } from "./address/types.js";
import { Contact, ContactCreateRequest, ContactUpdateRequest } from "./contact/types.js";

export interface CustomerUpdateRequest {
  companyName?: string;
  displayName?: string;
  freightTerm?: string;
  shippingMethod?: string;
  paymentMode?: string;
  paymentTerm?: string;
  primaryContactId?: string;
  defaultShippingAddressId?: string;
  defaultBillingAddressId?: string;
  referenceId?: string;
  displayId?: string;
  assignedSalesRepIds?: string[];
  assignedPriceListId?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  addresses?: any[];
  contacts?: any[];
  attributes?: any[];
}
export interface CustomerListResponse {
  id: string;
  referenceId: string;
  displayId: string;
  name: string;
  displayName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  addresses?: AddressUpdateRequest[];
  contacts?: ContactUpdateRequest[];
  shippingMethod: string;
  paymentMode: string;
  paymentTerm: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerDetailsResponse {
  id: string;
  referenceId: string;
  displayId: string;
  name: string;
  displayName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  status: string;
  freightTerm: string;
  shippingMethod: string;
  paymentMode: string;
  paymentTerm: string;
  assignedSalesReps: any[];
  assignedPriceList?: any;
  addresses: Address[];
  contacts: Contact[];
  attributes: any[];
  createdAt: string;
  updatedAt: string;
}

export interface CustomerListRequest {
  sortBy?: string;
  sort?: string;
  status?: string;
  referenceIds?: string[];
  page?: number;
  pageSize?: number;
}

export interface CustomerCreateRequest {
  companyName: string;
  displayName: string;
  referenceId: string;
  freightTerm?: string;
  shippingMethod?: string;
  paymentMode?: string;
  paymentTerm?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  assignedSalesRepIds?: string[];
  assignedPriceListID?: string;
  addresses?: AddressCreateRequest[];
  contacts?: ContactCreateRequest[];
  attributes?: any[];
}

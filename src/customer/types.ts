export interface Customer {
  id: string;
  referenceId: string;
  companyName: string;
  displayName: string;
  freightTerm?: string;
  shippingMethod?: string;
  paymentMode?: string;
  paymentTerm?: string;
  status?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
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
  addresses?: any[];
  contacts?: any[];
  attributes?: any[];
}

import { Pagination } from "../core/types.js";
export interface Order {
  id: string;
  referenceId?: string;
  displayId?: string;
  customerId: string;
  status?: string;
  amount?: number;
  amountPaid?: number;
  paymentStatus?: string;
  fulfillmentStatus?: string;
  shipmentDate?: string;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
  paymentTerm?: string;
  shippingMethod?: string;
  freightTerm?: string;
  discountValue?: number;
  taxValue?: number;
  shippingCharge?: number;
  customerNote?: string;
  internalNote?: string;
  purchaseOrderNumber?: string;
  source?: string;
  priceListId?: string;
  paymentMethodId?: string;
  billingAddress?: OrderAddress;
  shippingAddress?: OrderAddress;
  primaryContact?: OrderContact;
  containerInfo?: ContainerInfo;
  customerConsent?: CustomerConsent;
  attributes?: Attribute[];
  additionalCharges?: OrderCharge[];
  lineItems: OrderLineItem[];
}

export interface OrderLineItem {
  productId?: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  shippedQuantity?: number;
  invoicedQuantity?: number;
  cancelledQuantity?: number;
  pickedQuantity?: number;
  discount?: number;
  discountType?: string;
  isAdhoc?: boolean;
  note?: string;
}

export interface OrderCharge {
  name: string;
  type: string;
  amount: number;
}

export interface CustomerConsent {
  hasConsent: boolean;
  consentFileId: string;
}

export interface ContainerInfo {
  name?: string;
  key: string;
  unit: string;
  volume: number;
}

export interface OrderAddress {
  id?: string;
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
}

export interface OrderContact {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  designation?: string;
}

export interface Attribute {
  name: string;
  value: string;
}

export interface OrderListRequest extends Pagination {
  sortBy?: string;
  sort?: string;
  referenceIds?: string[];
  orderStatus?: string;
  source?: string;
  createdAfter?: string;
  createdBefore?: string;
  updatedAfter?: string;
  updatedBefore?: string;
}

export interface OrderCreateRequest {
  referenceId: string;
  displayId?: string;
  customerId: string;
  paymentTerm?: string;
  shippingMethod?: string;
  freightTerm?: string;
  amount?: number;
  amountPaid?: number;
  discountValue?: number;
  taxValue?: number;
  shippingCharge?: number;
  shipmentDate?: string;
  dueDate?: string;
  paymentStatus?: string;
  paymentMethodId?: string;
  fulfillmentStatus?: string;
  createdAt?: string;
  updatedAt?: string;
  customerNote?: string;
  internalNote?: string;
  status?: string;
  source?: string;
  purchaseOrderNumber?: string;
  customerConsent?: CustomerConsent;
  containerInfo?: ContainerInfo;
  billingAddress?: OrderAddress;
  shippingAddress?: OrderAddress;
  primaryContact?: OrderContact;
  lineItems: OrderLineItem[];
  attributes?: Attribute[];
  additionalCharges?: OrderCharge[];
}

export interface OrderUpdateRequest extends OrderCreateRequest {}

export interface OrderPatchStatusRequest {
  status: string;
}

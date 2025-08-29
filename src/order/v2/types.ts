import { Pagination } from "../../core/types.js";
export interface Order {
  id: string;
  referenceId?: string;
  displayId?: string;
  customerId: string;
  status?: "draft" | "confirmed" | "cancelled";
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
  charges?: OrderCharge[];
  lineItems: OrderLineItem[];
  customerReferenceId?: string;
  customerName?: string;
  card?: PaymentCard;
}

export interface OrderLineItem {
  /**
   * Product ID (JSON: "product_id")
   */
  productId?: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  shippedQuantity?: number;
  invoicedQuantity?: number;
  cancelledQuantity?: number;
  pickedQuantity?: number;
  discount?: number;
  discountType?: "percentage" | "value";
  isAdhoc?: boolean;
  note?: string;
}

export interface OrderCharge {
  name: string;
  type: string;
  valueType?: "percentage" | "value";
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
  attributes?: Attribute[];
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

export interface PaymentCard {
  id: string;
  token: string;
  paymentMethodType: string;
  brand: string;
  cardType: string;
  lastFourDigits: string;
  cardExp: string;
  externalCustomerId: string;
}

export interface OrderListRequest extends Pagination {
  sortBy?: "created_at" | "updated_at";
  sort?: "asc" | "desc";
  referenceIds?: string[];
  orderStatus?: "draft" | "confirmed" | "cancelled";
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
  status?: "draft" | "confirmed";
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

export interface OrderUpdateRequest extends Partial<Omit<OrderCreateRequest, "lineItems">> {
  lineItems?: OrderLineItem[];
}

export interface OrderPatchStatusRequest {
  status: "draft" | "confirmed" | "cancelled";
}

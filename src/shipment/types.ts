import { Pagination } from "../core/types.js";

export interface ShipmentRequest extends Pagination {
  referenceIds?: string[];
  shipmentStatus?: "shipped" | "created" | "fulfilled";
  sortBy?: "created_at" | "updated_at";
  sort?: "asc" | "desc";
}

export interface ShipmentItemCreateRequest {
  productId: string;
  quantity: number;
}

export interface TrackingInfo {
  trackingNumber: string;
  trackingUrl?: string;
  deliveryPartner?: string;
}

export interface ShipmentCreateRequest {
  referenceId: string;
  orderId: string;
  createdAt: string;
  shipmentStatus: "shipped" | "created" | "fulfilled";
  trackingInfo?: TrackingInfo;
  note?: string;
  name?: string;
  shipmentItems: ShipmentItemCreateRequest[];
}

export interface ShipmentUpdateRequest {
  id?: string;
  orderId?: string;
  updatedAt?: string;
  status?: "active" | "inactive";
  shipmentStatus?: "shipped" | "created";
  trackingInfo?: TrackingInfo;
  shipmentItems?: ShipmentItemCreateRequest[];
  remark?: string;
  note?: string;
  name: string;
}

export interface ShipmentPathParams {
  id: string;
}

export interface ShipmentStatusPatchRequest {
  shipmentStatus: "shipped" | "created" | "fulfilled";
  remark?: string;
  note?: string;
}

export interface ShipmentItemResponse {
  id: string;
  skuId: string;
  quantity: number;
}

export interface TrackingInfoResponse {
  trackingNumber: string;
  trackingUrl?: string;
  deliveryPartner?: string;
}

export interface ShipmentResponse {
  id: string;
  referenceId: string;
  orderId: string;
  status: string;
  trackingInfo?: TrackingInfoResponse;
  shipmentItems?: ShipmentItemResponse[];
  updatedAt: string;
  createdAt: string;
  note?: string;
}

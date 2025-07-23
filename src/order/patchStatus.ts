import { HttpClient } from "../core/httpClient";
import { OrderPatchStatusRequest, Order } from "./types";

export async function patchStatus(
  client: HttpClient,
  orderId: string,
  data: OrderPatchStatusRequest
): Promise<Order> {
  return client.patch(`/orders/${orderId}/status`, data);
}
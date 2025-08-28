import { HttpClient } from "../../core/httpClient.js";
import { OrderPatchStatusRequest, Order } from "./types.js";

export async function patchStatus(
  client: HttpClient,
  orderId: string,
  data: OrderPatchStatusRequest
): Promise<Order> {
  return client.patch(`/orders/${orderId}/status`, data);
}
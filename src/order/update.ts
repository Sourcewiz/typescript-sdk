import { HttpClient } from "../core/httpClient.js";
import { OrderUpdateRequest, Order } from "./types.js";

export async function update(
  client: HttpClient,
  orderId: string,
  data: OrderUpdateRequest
): Promise<Order> {
  return client.put(`/orders/${orderId}`, data);
}
import { HttpClient } from "../core/httpClient";
import { OrderUpdateRequest, Order } from "./types";

export async function update(
  client: HttpClient,
  orderId: string,
  data: OrderUpdateRequest
): Promise<Order> {
  return client.put(`/orders/${orderId}`, data);
}
import { HttpClient } from "../core/httpClient";
import { Order } from "./types";

export async function get(
  client: HttpClient,
  orderId: string
): Promise<Order> {
  return client.get(`/orders/${orderId}`);
}
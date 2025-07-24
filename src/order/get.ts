import { HttpClient } from "../core/httpClient.js";
import { Order } from "./types";

export async function get(
  client: HttpClient,
  orderId: string
): Promise<Order> {
  return client.get(`/orders/${orderId}`);
}
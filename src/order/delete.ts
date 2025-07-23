import { HttpClient } from "../core/httpClient";

export async function deleteOrder(
  client: HttpClient,
  orderId: string
): Promise<void> {
  return client.delete(`/orders/${orderId}`);
}
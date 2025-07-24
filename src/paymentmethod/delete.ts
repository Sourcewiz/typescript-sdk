import { HttpClient } from "../core/httpClient.js";

export async function deletePaymentMethod(client: HttpClient, id: string): Promise<void> {
  return client.delete(`/payment-methods/${id}`);
}

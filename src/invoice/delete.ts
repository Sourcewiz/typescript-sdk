import { HttpClient } from "../core/httpClient.js";

export async function deleteInvoice(
  client: HttpClient,
  id: string
): Promise<void> {
  return client.delete(`/invoices/${id}`);
}

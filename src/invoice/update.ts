import { HttpClient } from "../core/httpClient.js";
import { InvoiceUpdateRequest, Invoice } from "./types.js";

export async function update(
  client: HttpClient,
  id: string,
  data: InvoiceUpdateRequest
): Promise<Invoice> {
  return await client.patch(`/invoices/${id}`, data);
}

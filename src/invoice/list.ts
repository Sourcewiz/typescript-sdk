import { HttpClient } from "../core/httpClient.js";
import { Invoice, InvoiceListParams } from "./types.js";

export async function list(
  client: HttpClient,
  params?: InvoiceListParams
): Promise<Invoice[]> {
  return await client.get("/invoices", params);
}

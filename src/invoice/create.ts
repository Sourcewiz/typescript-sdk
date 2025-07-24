import { HttpClient } from "../core/httpClient.js";
import { InvoiceCreateRequest, Invoice } from "./types.js";

export async function create(
  client: HttpClient,
  data: InvoiceCreateRequest
): Promise<Invoice> {
  return client.post("/invoices", data);
}

import { HttpClient } from "../core/httpClient.js";
import { Invoice } from "./types.js";

export async function get(client: HttpClient, id: string): Promise<Invoice> {
  return client.get(`/invoices/${id}`);
}

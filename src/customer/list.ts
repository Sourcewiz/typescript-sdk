import { HttpClient } from "../core/httpClient.js";
import { Customer } from "./types.js";

export async function listCustomers(
  client: HttpClient,
  params: Record<string, any> = {}
): Promise<Customer[]> {
  return client.get("/customers", params);
}

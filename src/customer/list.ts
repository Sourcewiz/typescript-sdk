import { HttpClient } from "../core/httpClient.js";
import { CustomerListResponse } from "./types.js";

export async function listCustomers(
  client: HttpClient,
  params: Record<string, any> = {}
): Promise<CustomerListResponse[]> {
  return client.get("/customers", params);
}

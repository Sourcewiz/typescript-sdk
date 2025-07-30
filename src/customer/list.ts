import { HttpClient } from "../core/httpClient.js";
import { CustomerListRequest, CustomerListResponse } from "./types.js";

export async function listCustomers(
  client: HttpClient,
  params?: CustomerListRequest
): Promise<CustomerListResponse[]> {
  return client.get("/customers", params);
}

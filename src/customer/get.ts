import { HttpClient } from "../core/httpClient.js";
import { CustomerDetailsResponse } from "./types.js";

export async function getCustomer(
  client: HttpClient,
  id: string
): Promise<CustomerDetailsResponse> {
  return client.get(`/customers/${id}`);
}

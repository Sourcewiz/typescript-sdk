import { HttpClient } from "../core/httpClient.js";
import { CustomerDetailsResponse, CustomerUpdateRequest } from "./types.js";

export async function updateCustomer(
  client: HttpClient,
  id: string,
  data: Partial<CustomerUpdateRequest>
): Promise<CustomerDetailsResponse> {
  return client.patch(`/customers/${id}`, data);
}

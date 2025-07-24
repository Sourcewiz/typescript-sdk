import { HttpClient } from "../core/httpClient.js";
import { Customer } from "./types.js";

export async function updateCustomer(
  client: HttpClient,
  id: string,
  data: Partial<Customer>
): Promise<Customer> {
  return client.patch(`/customers/${id}`, data);
}

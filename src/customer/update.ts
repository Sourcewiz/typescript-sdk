import { HttpClient } from "../core/httpClient";
import { Customer } from "./types";

export async function updateCustomer(
  client: HttpClient,
  id: string,
  data: Partial<Customer>
): Promise<Customer> {
  return client.patch(`/customers/${id}`, data);
}

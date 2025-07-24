import { HttpClient } from "../core/httpClient.js";
import { Customer } from "./types.js";

export async function getCustomer(
  client: HttpClient,
  id: string
): Promise<Customer> {
  return client.get(`/customers/${id}`);
}

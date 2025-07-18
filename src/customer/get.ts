import { HttpClient } from "../core/httpClient";
import { Customer } from "./types";

export async function getCustomer(
  client: HttpClient,
  id: string
): Promise<Customer> {
  return client.get(`/customers/${id}`);
}

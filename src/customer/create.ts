import { HttpClient } from "../core/httpClient.js";
import { Customer, CustomerCreateRequest } from "./types.js";

export async function createCustomer(
  client: HttpClient,
  data: CustomerCreateRequest
): Promise<Customer> {
  return client.post("/customers", data);
}

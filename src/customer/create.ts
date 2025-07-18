import { HttpClient } from "../core/httpClient";
import { Customer, CustomerCreateRequest } from "./types";

export async function createCustomer(
  client: HttpClient,
  data: CustomerCreateRequest
): Promise<Customer> {
  return client.post("/customers", data);
}

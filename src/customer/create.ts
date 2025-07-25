import { HttpClient } from "../core/httpClient.js";
import { CustomerDetailsResponse, CustomerCreateRequest } from "./types.js";

export async function createCustomer(
  client: HttpClient,
  data: CustomerCreateRequest
): Promise<CustomerDetailsResponse> {
  return client.post("/customers", data);
}

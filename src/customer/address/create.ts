import { HttpClient } from "../../core/httpClient.js";
import { AddressCreateRequest, Address } from "./types.js";

export async function createAddress(
  client: HttpClient,
  customerId: string,
  data: AddressCreateRequest
): Promise<Address> {
  return client.post(`/customers/${customerId}/addresses`, data);
}

import { HttpClient } from "../../core/httpClient";
import { AddressCreateRequest, Address } from "./types";

export async function createAddress(
  client: HttpClient,
  customerId: string,
  data: AddressCreateRequest
): Promise<Address> {
  return client.post(`/customers/${customerId}/addresses`, data);
}

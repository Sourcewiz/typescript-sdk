import { HttpClient } from "../../core/httpClient.js";
import { AddressListRequest, Address } from "./types.js";

export async function listAddress(
  client: HttpClient,
  customerId: string,
  params?: AddressListRequest
): Promise<Address[]> {
  return client.get(`/customers/${customerId}/addresses`, params);
}

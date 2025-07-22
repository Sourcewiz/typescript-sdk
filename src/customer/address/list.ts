import { HttpClient } from "../../core/httpClient";
import { AddressListRequest, Address } from "./types";

export async function listAddress(
  client: HttpClient,
  customerId: string,
  params?: AddressListRequest
): Promise<Address[]> {
  return client.get(`/customers/${customerId}/addresses`, params);
}

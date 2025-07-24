import { HttpClient } from "../../core/httpClient.js";
import { AddressUpdateRequest, Address } from "./types.js";

export async function updateAddress(
  client: HttpClient,
  customerId: string,
  addressId: string,
  data: AddressUpdateRequest
): Promise<Address> {
  return client.put(`/customers/${customerId}/addresses/${addressId}`, data);
}

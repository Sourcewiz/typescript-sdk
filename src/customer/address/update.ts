import { HttpClient } from "../../core/httpClient";
import { AddressUpdateRequest, Address } from "./types";

export async function updateAddress(
  client: HttpClient,
  customerId: string,
  addressId: string,
  data: AddressUpdateRequest
): Promise<Address> {
  return client.put(`/customers/${customerId}/addresses/${addressId}`, data);
}

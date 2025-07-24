import { HttpClient } from "../../core/httpClient.js";
import { Address } from "./types.js";

export async function getAddress(
  client: HttpClient,
  customerId: string,
  addressId: string
): Promise<Address> {
  return client.get(`/customers/${customerId}/addresses/${addressId}`);
}

import { HttpClient } from "../../core/httpClient";
import { Address } from "./types";

export async function getAddress(
  client: HttpClient,
  customerId: string,
  addressId: string
): Promise<Address> {
  return client.get(`/customers/${customerId}/addresses/${addressId}`);
}

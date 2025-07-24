import { HttpClient } from "../../core/httpClient.js";

export async function deleteAddress(
  client: HttpClient,
  customerId: string,
  addressId: string
): Promise<void> {
  return client.delete(`/customers/${customerId}/addresses/${addressId}`);
}

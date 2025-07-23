import { HttpClient } from "../../core/httpClient";

export async function deleteContact(
  client: HttpClient,
  customerId: string,
  contactId: string
): Promise<void> {
  return client.delete(`/customers/${customerId}/contacts/${contactId}`);
}
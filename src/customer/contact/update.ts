import { HttpClient } from "../../core/httpClient.js";
import { ContactUpdateRequest, Contact } from "./types.js";

export async function update(
  client: HttpClient,
  customerId: string,
  contactId: string,
  data: ContactUpdateRequest
): Promise<Contact> {
  return client.put(`/customers/${customerId}/contacts/${contactId}`, data);
}
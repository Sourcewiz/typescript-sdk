import { HttpClient } from "../../core/httpClient";
import { ContactUpdateRequest, Contact } from "./types";

export async function update(
  client: HttpClient,
  customerId: string,
  contactId: string,
  data: ContactUpdateRequest
): Promise<Contact> {
  return client.put(`/customers/${customerId}/contacts/${contactId}`, data);
}
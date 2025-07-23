import { HttpClient } from "../../core/httpClient";
import { Contact } from "./types";

export async function get(
  client: HttpClient,
  customerId: string,
  contactId: string
): Promise<Contact> {
  return client.get(`/customers/${customerId}/contacts/${contactId}`);
}
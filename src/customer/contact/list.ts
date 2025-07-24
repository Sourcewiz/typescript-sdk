import { HttpClient } from "../../core/httpClient.js";
import { ContactListRequest, Contact } from "./types.js";

export async function list(
  client: HttpClient,
  customerId: string,
  params?: ContactListRequest
): Promise<Contact[]> {
  return client.get(`/customers/${customerId}/contacts`, params);
}
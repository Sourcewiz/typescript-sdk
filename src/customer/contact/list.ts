import { HttpClient } from "../../core/httpClient";
import { ContactListRequest, Contact } from "./types";

export async function list(
  client: HttpClient,
  customerId: string,
  params?: ContactListRequest
): Promise<Contact[]> {
  return client.get(`/customers/${customerId}/contacts`, params);
}
import { HttpClient } from "../../core/httpClient.js";
import { ContactCreateRequest, Contact } from "./types.js";

export async function create(
  client: HttpClient,
  customerId: string,
  data: ContactCreateRequest
): Promise<Contact> {
  return client.post(`/customers/${customerId}/contacts`, data);
}

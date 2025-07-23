import { HttpClient } from "../../core/httpClient";
import { ContactCreateRequest, Contact } from "./types";

export async function create(
  client: HttpClient,
  customerId: string,
  data: ContactCreateRequest
): Promise<Contact> {
  return client.post(`/customers/${customerId}/contacts`, data);
}
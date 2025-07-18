import { HttpClient } from "../core/httpClient";
import { Customer } from "./types";

export async function listCustomers(
  client: HttpClient,
  params: Record<string, any> = {}
): Promise<Customer[]> {
  return client.get("/customers", params);
}

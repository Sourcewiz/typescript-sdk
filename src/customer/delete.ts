import { HttpClient } from "../core/httpClient.js";

export async function deleteCustomer(
  client: HttpClient,
  id: string
): Promise<void> {
  await client.delete(`/customers/${id}`);
}

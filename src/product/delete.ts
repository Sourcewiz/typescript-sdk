import { HttpClient } from "../core/httpClient.js";

export async function deleteProduct(
  client: HttpClient,
  id: string
): Promise<void> {
  await client.delete(`/products/${id}`);
}
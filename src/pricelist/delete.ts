import { HttpClient } from "../core/httpClient.js";

export async function deletePriceList(client: HttpClient, id: string): Promise<void> {
  return client.delete(`/price-lists/${encodeURIComponent(id)}`);
}

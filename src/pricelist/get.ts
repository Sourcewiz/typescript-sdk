import { HttpClient } from "../core/httpClient.js";
import { PriceListResponse } from "./types.js";

export async function getPriceList(
  client: HttpClient,
  id: string
): Promise<PriceListResponse> {
  return client.get(`/price-lists/${encodeURIComponent(id)}`);
}

import { HttpClient } from "../core/httpClient.js";
import { PriceListUpdateRequest, PriceListResponse } from "./types.js";

export async function updatePriceList(
  client: HttpClient,
  id: string,
  data: PriceListUpdateRequest
): Promise<PriceListResponse> {
  return client.patch(`/price-lists/${encodeURIComponent(id)}`, data);
}

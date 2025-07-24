import { HttpClient } from "../core/httpClient.js";
import { PriceListRequest, PriceListResponse } from "./types.js";

export async function listPriceList(
  client: HttpClient,
  params?: PriceListRequest
): Promise<PriceListResponse[]> {
  return client.get("/price-lists", params);
}

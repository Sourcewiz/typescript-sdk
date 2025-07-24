import { HttpClient } from "../core/httpClient.js";
import { PriceListCreateRequest, PriceListResponse } from "./types.js";

export async function createPriceList(
  client: HttpClient,
  data: PriceListCreateRequest
): Promise<PriceListResponse> {
  return client.post("/price-lists", data);
}

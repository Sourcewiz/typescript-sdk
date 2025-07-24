import { HttpClient } from "../core/httpClient.js";
import { ProductPricingResponse } from "./types.js";

export async function list(
  client: HttpClient,
  id: string
): Promise<ProductPricingResponse> {
  return client.get(`/product-pricings/${encodeURIComponent(id)}`);
}

import { HttpClient } from "../core/httpClient.js";
import { ProductPriceRequest, ProductPricingResponse } from "./types.js";

export async function list(
  client: HttpClient,
  id: string,
  params: ProductPriceRequest = {} as ProductPriceRequest
): Promise<ProductPricingResponse> {
  return client.get(`/product-pricings/${encodeURIComponent(id)}`, params);
}
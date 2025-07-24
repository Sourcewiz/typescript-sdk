import { HttpClient } from "../core/httpClient.js";
import { ProductPriceRequest, ProductPricingResponse } from "./types.js";

export async function update(
  client: HttpClient,
  id: string,
  data: ProductPriceRequest
): Promise<ProductPricingResponse> {
  return client.patch(`/product-pricings/${encodeURIComponent(id)}`, data);
}

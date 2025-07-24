import { HttpClient } from "../core/httpClient.js";
import { Product, ProductUpdateRequest } from "./types.js";

export async function updateProduct(
  client: HttpClient,
  id: string,
  data: ProductUpdateRequest
): Promise<Product> {
  return client.patch(`/products/${id}`, data);
}
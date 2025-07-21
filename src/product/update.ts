import { HttpClient } from "../core/httpClient";
import { Product, ProductUpdateRequest } from "./types";

export async function updateProduct(
  client: HttpClient,
  id: string,
  data: ProductUpdateRequest
): Promise<Product> {
  return client.patch(`/products/${id}`, data);
}
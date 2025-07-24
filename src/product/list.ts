import { HttpClient } from "../core/httpClient.js";
import { Product, ProductListRequest } from "./types.js";

export async function listProducts(
  client: HttpClient,
  params: ProductListRequest = {}
): Promise<Product[]> {
  return client.get("/products", params);
}

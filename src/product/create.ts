import { HttpClient } from "../core/httpClient.js";
import { Product, ProductCreateRequest } from "./types.js";

export async function createProduct(
  client: HttpClient,
  data: ProductCreateRequest
): Promise<Product> {
  return client.post("/products", data);
}

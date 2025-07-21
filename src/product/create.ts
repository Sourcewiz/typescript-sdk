import { HttpClient } from "../core/httpClient";
import { Product, ProductCreateRequest } from "./types";

export async function createProduct(
  client: HttpClient,
  data: ProductCreateRequest
): Promise<Product> {
  return client.post("/products", data);
}
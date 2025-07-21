import { HttpClient } from "../core/httpClient";
import { Product, ProductListRequest } from "./types";

export async function listProducts(
  client: HttpClient,
  params: ProductListRequest = {}
): Promise<Product[]> {
  return client.get("/products", params);
}

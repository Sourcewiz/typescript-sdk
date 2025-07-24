import { HttpClient } from "../core/httpClient.js";
import { Product } from "./types.js";

export async function getProduct(
  client: HttpClient,
  id: string
): Promise<Product> {
  return client.get(`/products/${id}`);
}
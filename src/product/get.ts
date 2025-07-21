import { HttpClient } from "../core/httpClient";
import { Product } from "./types";

export async function getProduct(
  client: HttpClient,
  id: string
): Promise<Product> {
  return client.get(`/products/${id}`);
}
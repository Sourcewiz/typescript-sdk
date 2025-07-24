import { HttpClient } from "../core/httpClient.js";
import { InventoryResponse, InventoryCreateRequest } from "./types.js";

export async function update(
  client: HttpClient,
  data: InventoryCreateRequest
): Promise<InventoryResponse> {
  return client.post(`/inventories`, data);
}

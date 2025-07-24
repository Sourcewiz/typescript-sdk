import { HttpClient } from "../core/httpClient.js";
import {
  InventoryRequest,
  InventoryResponse,
} from "./types.js";

export async function list(
  client: HttpClient,
  params?: InventoryRequest
): Promise<InventoryResponse[]> {
  const res = await client.get<{ data: InventoryResponse[] }>(
    "/inventories",
    params
  );
  return res.data;
}

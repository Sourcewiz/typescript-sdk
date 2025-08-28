import { HttpClient } from "../../core/httpClient.js";
import { OrderListRequest, Order } from "./types.js";

export async function list(
  client: HttpClient,
  params?: OrderListRequest
): Promise<Order[]> {
  return client.get("/orders", params);
}
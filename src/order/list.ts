import { HttpClient } from "../core/httpClient";
import { OrderListRequest, Order } from "./types";

export async function list(
  client: HttpClient,
  params?: OrderListRequest
): Promise<Order[]> {
  return client.get("/orders", params);
}
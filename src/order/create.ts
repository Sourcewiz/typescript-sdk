import { HttpClient } from "../core/httpClient";
import { OrderCreateRequest, Order } from "./types";

export async function create(
  client: HttpClient,
  data: OrderCreateRequest
): Promise<Order> {
  return client.post("/orders", data);
}
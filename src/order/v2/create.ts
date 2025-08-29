import { HttpClient } from "../../core/httpClient.js";
import { OrderCreateRequest, Order } from "./types.js";

export async function create(
  client: HttpClient,
  data: OrderCreateRequest
): Promise<Order> {
  return client.post("/orders", data);
}

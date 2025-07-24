import { HttpClient } from "../core/httpClient.js";
import { SalesRepListRequest, SalesRepResponse } from "./types.js";

export async function list(
  client: HttpClient,
  params?: SalesRepListRequest
): Promise<SalesRepResponse[]> {
  return client.get("/sales-reps", params);
}

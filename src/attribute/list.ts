import { HttpClient } from "../core/httpClient.js";
import { AttributeRequest, AttributeResponse } from "./types.js";

export async function listAttributes(
  client: HttpClient,
  params?: AttributeRequest
): Promise<AttributeResponse[]> {
  const res = await client.get<{ data: AttributeResponse[] }>(
    "/v1/attributes",
    params
  );
  return res.data;
}

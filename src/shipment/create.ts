import { HttpClient } from "../core/httpClient.js";
import { ShipmentCreateRequest, ShipmentResponse } from "./types.js";

export async function createShipment(
  client: HttpClient,
  data: ShipmentCreateRequest
): Promise<ShipmentResponse> {
  return client.post("/shipments", data);
}

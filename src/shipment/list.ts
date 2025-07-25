import { HttpClient } from "../core/httpClient.js";
import { ShipmentRequest, ShipmentResponse } from "./types.js";

export async function listShipments(
  client: HttpClient,
  params: ShipmentRequest
): Promise<ShipmentResponse[]> {
  return client.get("/shipments", params);
}
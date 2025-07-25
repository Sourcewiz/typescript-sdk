import { HttpClient } from "../core/httpClient.js";
import { ShipmentPathParams, ShipmentResponse } from "./types.js";

export async function getShipment(
  client: HttpClient,
  params: ShipmentPathParams
): Promise<ShipmentResponse> {
  return client.get(`/shipments/${params.id}`);
}

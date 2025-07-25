import { HttpClient } from "../core/httpClient.js";
import { ShipmentUpdateRequest, ShipmentResponse } from "./types.js";

export async function updateShipment(
  client: HttpClient,
  id: string,
  data: ShipmentUpdateRequest
): Promise<ShipmentResponse> {
  return client.patch(`/shipments/${id}`, data);
}

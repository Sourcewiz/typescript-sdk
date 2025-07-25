import { HttpClient } from "../core/httpClient.js";
import { ShipmentPathParams } from "./types.js";

export async function deleteShipment(
  client: HttpClient,
  params: ShipmentPathParams
): Promise<void> {
  return client.delete(`/shipments/${params.id}`);
}

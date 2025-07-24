import { HttpClient } from "../core/httpClient.js";
import {
  PaymentMethodRequest,
  PaymentMethodResponse,
} from "./types.js";

export async function list(
  client: HttpClient,
  params?: PaymentMethodRequest
): Promise<PaymentMethodResponse[]> {
  return client.get("/payment-methods", params);
}

import { HttpClient } from "../core/httpClient.js";
import {
  PaymentMethodCreateRequest,
  PaymentMethodResponse,
} from "./types.js";

export async function create(
  client: HttpClient,
  data: PaymentMethodCreateRequest
): Promise<PaymentMethodResponse> {
  return client.post("/payment-methods", data);
}

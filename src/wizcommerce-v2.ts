import { HttpClient } from "./core/httpClient.js";
import * as OrderV2 from "./order/v2/index.js";

export class WizCommerceV2 {
  public client: HttpClient;
  constructor(baseUrl: string, apiKey: string) {
    this.client = new HttpClient(apiKey, baseUrl);
  }

  order = {
    list: (params?: OrderV2.OrderListRequest) =>
      OrderV2.list(this.client, params),
    get: (id: string) => OrderV2.get(this.client, id),
    create: (data: OrderV2.OrderCreateRequest) =>
      OrderV2.create(this.client, data),
    update: (id: string, data: OrderV2.OrderUpdateRequest) =>
      OrderV2.update(this.client, id, data),
    delete: (id: string) => OrderV2.delete(this.client, id),
    patchStatus: (id: string, data: OrderV2.OrderPatchStatusRequest) =>
      OrderV2.patchStatus(this.client, id, data),
  };
}

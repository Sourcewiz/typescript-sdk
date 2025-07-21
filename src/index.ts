import { HttpClient } from "./core/httpClient";
import * as Customer from "./customer";
import * as Product from "./product";

export class WizCommerce {
  static LOCAL = "http://localhost:8080/v1";
  static STAGING = "https://api-staging.sourcerer.tech/v1";
  static PRODUCTION = "https://api.yourdomain.com/v1";

  private client: HttpClient;

  constructor(env: string, apiKey: string) {
    this.client = new HttpClient(apiKey, env);
  }

  customer = {
    list: (params?: any) => Customer.list(this.client, params),
    get: (id: string) => Customer.get(this.client, id),
    create: (data: Customer.CustomerCreateRequest) =>
      Customer.create(this.client, data),
    update: (id: string, data: Partial<Customer.Customer>) =>
      Customer.update(this.client, id, data),
    delete: (id: string) => Customer.delete(this.client, id),
  };

  product = {
    list: (params?: any) => Product.list(this.client, params),
    get: (id: string) => Product.get(this.client, id),
    create: (data: Product.ProductCreateRequest) =>
      Product.create(this.client, data),
    update: (id: string, data: Product.ProductUpdateRequest) =>
      Product.update(this.client, id, data),
    delete: (id: string) => Product.delete(this.client, id),
  };
}

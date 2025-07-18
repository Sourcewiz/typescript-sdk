import { HttpClient } from "./core/httpClient";
import * as Customer from "./customer";



export class WizCommerce {
  static LOCAL = "http://localhost:8080/v1";
  static STAGING = "https://api-staging.sourcerer.tech/v1";
  static PRODUCTION = "https://api.yourdomain.com/v1";

  private client: HttpClient;

  constructor(env: string, apiKey: string) {
    this.client = new HttpClient(apiKey, env);
  }

  customer = {
    list: (params?: any) => Customer.listCustomers(this.client, params),
    get: (id: string) => Customer.getCustomer(this.client, id),
    create: (data: Customer.CustomerCreateRequest) => Customer.createCustomer(this.client, data),
    update: (id: string, data: Partial<Customer.Customer>) => Customer.updateCustomer(this.client, id, data),
    delete: (id: string) => Customer.deleteCustomer(this.client, id),
    // add other methods as needed
  };
}

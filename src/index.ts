import { HttpClient } from "./core/httpClient";
import * as Customer from "./customer";
import * as Product from "./product";
import * as Order from "./order";

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
    address: {
      list: (customerId: string, params?: any) =>
        Customer.address.list(this.client, customerId, params),
      get: (customerId: string, addressId: string) =>
        Customer.address.get(this.client, customerId, addressId),
      create: (
        customerId: string,
        data: Customer.address.AddressCreateRequest
      ) => Customer.address.create(this.client, customerId, data),
      update: (
        customerId: string,
        addressId: string,
        data: Customer.address.AddressUpdateRequest
      ) => Customer.address.update(this.client, customerId, addressId, data),
      delete: (customerId: string, addressId: string) =>
        Customer.address.delete(this.client, customerId, addressId),
    },
    contact: {
      list: (customerId: string, params?: any) =>
        Customer.contact.list(this.client, customerId, params),
      get: (customerId: string, contactId: string) =>
        Customer.contact.get(this.client, customerId, contactId),
      create: (
        customerId: string,
        data: Customer.contact.ContactCreateRequest
      ) => Customer.contact.create(this.client, customerId, data),
      update: (
        customerId: string,
        contactId: string,
        data: Customer.contact.ContactUpdateRequest
      ) => Customer.contact.update(this.client, customerId, contactId, data),
      delete: (customerId: string, contactId: string) =>
        Customer.contact.delete(this.client, customerId, contactId),
    },
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
  
  order = {
    list: (params?: any) => Order.list(this.client, params),
    get: (id: string) => Order.get(this.client, id),
    create: (data: Order.OrderCreateRequest) => Order.create(this.client, data),
    update: (id: string, data: Order.OrderUpdateRequest) =>
      Order.update(this.client, id, data),
    delete: (id: string) => Order.delete(this.client, id),
    patchStatus: (id: string, data: Order.OrderPatchStatusRequest) =>
      Order.patchStatus(this.client, id, data),
  };
}

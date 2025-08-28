import { WizCommerceV1 } from "./wizcommerce-v1.js";
import { WizCommerceV2 } from "./wizcommerce-v2.js";
import { URL } from "./url.js";

export class WizCommerce {
  static LOCAL = URL.local;
  static STAGING = URL.staging;
  static API = URL.production;

  customer: any;
  product: any;
  order: any;
  invoice: any;
  attribute: any;
  inventory: any;
  paymentmethod: any;
  pricelist: any;
  productpricing: any;
  salesrep: any;
  shipment: any;

  constructor(baseUrl: string, apiKey: string) {
    if (/\/v2\b/.test(baseUrl)) {
      const instance = new WizCommerceV2(baseUrl, apiKey);
      this.order = instance.order;
      // All other properties remain undefined for v2
    } else {
      const instance = new WizCommerceV1(baseUrl, apiKey);
      this.customer = instance.customer;
      this.product = instance.product;
      this.order = instance.order;
      this.invoice = instance.invoice;
      this.attribute = instance.attribute;
      this.inventory = instance.inventory;
      this.paymentmethod = instance.paymentmethod;
      this.pricelist = instance.pricelist;
      this.productpricing = instance.productpricing;
      this.salesrep = instance.salesrep;
      this.shipment = instance.shipment;
    }
  }
}

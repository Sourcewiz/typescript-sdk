import { WizCommerceV1 } from "./wizcommerce-v1.js";
import { WizCommerceV2 } from "./wizcommerce-v2.js";
import { URL } from "./url.js";

const VERSION_MAP = {
  v1: WizCommerceV1,
  v2: WizCommerceV2,
};

export class WizCommerce {
  static LOCAL = URL.local;
  static STAGING = URL.staging;
  static API = URL.api;

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
    if (!apiKey || typeof apiKey !== "string" || apiKey.trim() === "") {
      throw new Error(
        "WizCommerce: API key is required and must be a non-empty string."
      );
    }
    if (!baseUrl || typeof baseUrl !== "string" || baseUrl.trim() === "") {
      throw new Error(
        "WizCommerce: baseUrl is required and must be a non-empty string."
      );
    }
    const versionMatch = baseUrl.match(/\/v(\d+)\b/);
    if (!versionMatch) {
      throw new Error(
        "WizCommerce: baseUrl must end with /v1 or /v2 (e.g., https://api.wizcommerce.com/v1)"
      );
    }
    const versionKey = `v${versionMatch[1]}`;
    const SDKClass = VERSION_MAP[versionKey as keyof typeof VERSION_MAP];
    if (!SDKClass) {
      throw new Error(`WizCommerce: Unsupported API version '${versionKey}'.`);
    }
    const instance = new SDKClass(baseUrl, apiKey);

    if (instance instanceof WizCommerceV1) {
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
    } else if (instance instanceof WizCommerceV2) {
      this.customer = undefined;
      this.product = undefined;
      this.order = instance.order;
      this.invoice = undefined;
      this.attribute = undefined;
      this.inventory = undefined;
      this.paymentmethod = undefined;
      this.pricelist = undefined;
      this.productpricing = undefined;
      this.salesrep = undefined;
      this.shipment = undefined;
    }
  }
}

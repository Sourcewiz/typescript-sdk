# WizCommerce SDK

WizCommerce SDK is a modular TypeScript/JavaScript client for the WizCommerce API, supporting all major resources (customers, products, orders, invoices, attributes, inventory, payment methods, price lists, product pricing, sales reps, shipments) with type-safe DTOs, pagination, and robust error handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Pagination](#pagination)
- [Error Handling](#error-handling)
- [Contributing & Support](#contributing--support)

## Installation

```sh
npm install wizcommerce
```

## Usage

```ts
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List customers with pagination
wiz.customer.list({ page: 1, page_size: 20 }).then(console.log);

// Create a customer
wiz.customer
  .create({
    companyName: "Acme Inc.",
    displayName: "Acme",
    referenceId: "ACME-001",
    email: "info@acme.com",
    addresses: [
      /* ... */
    ],
    contacts: [
      /* ... */
    ],
    attributes: [
      /* ... */
    ],
  })
  .then(console.log);

// Error handling example
wiz.customer.get("bad-id").catch((err) => {
  console.error("API error:", err);
});
```

## API

## Pagination

All list methods accept `page` and `page_size` parameters for paginated results. Example:

```ts
wiz.customer.list({ page: 2, page_size: 50 });
```

## Error Handling

All SDK methods throw structured error objects with status codes and messages. Use `.catch()` or try/catch for async/await:

```ts
try {
  await wiz.customer.get("invalid-id");
} catch (error) {
  console.error(error.status, error.message);
}
```

## Contributing & Support

- Issues and feature requests: [GitHub Issues](https://github.com/Sourcewiz/typescript-sdk/issues)
- For questions and support, contact support@wizcommerce.com

### Customer

- `wiz.customer.list(params?)`
- `wiz.customer.get(id)`
- `wiz.customer.create(data)`
- `wiz.customer.update(id, data)`
- `wiz.customer.delete(id)`

#### Customer Address

- `wiz.customer.address.list(customerId, params?)`
- `wiz.customer.address.get(customerId, addressId)`
- `wiz.customer.address.create(customerId, data)`
- `wiz.customer.address.update(customerId, addressId, data)`
- `wiz.customer.address.delete(customerId, addressId)`

#### Customer Contact

- `wiz.customer.contact.list(customerId, params?)`
- `wiz.customer.contact.get(customerId, contactId)`
- `wiz.customer.contact.create(customerId, data)`
- `wiz.customer.contact.update(customerId, contactId, data)`
- `wiz.customer.contact.delete(customerId, contactId)`

### Product

- `wiz.product.list(params?)`
- `wiz.product.get(id)`
- `wiz.product.create(data)`
- `wiz.product.update(id, data)`
- `wiz.product.delete(id)`

### Order

- `wiz.order.list(params?)`
- `wiz.order.get(id)`
- `wiz.order.create(data)`
- `wiz.order.update(id, data)`
- `wiz.order.delete(id)`
- `wiz.order.patchStatus(id, data)`

### Invoice

- `wiz.invoice.list(params?)`
- `wiz.invoice.get(id)`
- `wiz.invoice.create(data)`
- `wiz.invoice.update(id, data)`
- `wiz.invoice.delete(id)`

### Attribute

- `wiz.attribute.list(params?)`

### Inventory

- `wiz.inventory.list(params?)`
- `wiz.inventory.update(data)`

### Payment Method

- `wiz.paymentmethod.list(params?)`
- `wiz.paymentmethod.create(data)`
- `wiz.paymentmethod.delete(id)`

### Price List

- `wiz.pricelist.list(params?)`
- `wiz.pricelist.get(id)`
- `wiz.pricelist.create(data)`
- `wiz.pricelist.update(id, data)`
- `wiz.pricelist.delete(id)`

### Product Pricing

- `wiz.productpricing.list(params?)`
- `wiz.productpricing.update(id, data)`

### Sales Rep (User)

- `wiz.salesrep.list(params?)`

### Shipment

- `wiz.shipment.list(params?)`
- `wiz.shipment.get(params)`
- `wiz.shipment.create(data)`
- `wiz.shipment.update(id, data)`
- `wiz.shipment.delete(params)`

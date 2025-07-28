# WizCommerce SDK

WizCommerce SDK is a modular TypeScript/JavaScript client for the WizCommerce API, supporting all major resources (customers, products, orders, invoices, attributes, inventory, payment methods, price lists, product pricing, sales reps, shipments) with type-safe DTOs, pagination, and robust error handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Customer](#customer)
  - [Customer Address](#customer-address)
  - [Customer Contact](#customer-contact)
  - [Product](#product)
  - [Order](#order)
  - [Invoice](#invoice)
  - [Attribute](#attribute)
  - [Inventory](#inventory)
  - [Payment Method](#payment-method)
  - [Price List](#price-list)
  - [Product Pricing](#product-pricing)
  - [Sales Rep](#sales-rep-user)
  - [Shipment](#shipment)
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

The WizCommerce SDK provides comprehensive access to all resources in the WizCommerce platform. Each resource has its own detailed documentation page with examples, parameter descriptions, and response formats.

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

For detailed documentation, see [Customer API Documentation](docs/Customer.md).

- `wiz.customer.list(params?)`
- `wiz.customer.get(id)`
- `wiz.customer.create(data)`
- `wiz.customer.update(id, data)`
- `wiz.customer.delete(id)`

#### Customer Address

For detailed documentation, see [Customer Address API Documentation](docs/CustomerAddress.md).

- `wiz.customer.address.list(customerId, params?)`
- `wiz.customer.address.get(customerId, addressId)`
- `wiz.customer.address.create(customerId, data)`
- `wiz.customer.address.update(customerId, addressId, data)`
- `wiz.customer.address.delete(customerId, addressId)`

#### Customer Contact

For detailed documentation, see [Customer Contact API Documentation](docs/CustomerContact.md).

- `wiz.customer.contact.list(customerId, params?)`
- `wiz.customer.contact.get(customerId, contactId)`
- `wiz.customer.contact.create(customerId, data)`
- `wiz.customer.contact.update(customerId, contactId, data)`
- `wiz.customer.contact.delete(customerId, contactId)`

### Product

For detailed documentation, see [Product API Documentation](docs/Product.md).

- `wiz.product.list(params?)`
- `wiz.product.get(id)`
- `wiz.product.create(data)`
- `wiz.product.update(id, data)`
- `wiz.product.delete(id)`

### Order

For detailed documentation, see [Order API Documentation](docs/Order.md).

- `wiz.order.list(params?)`
- `wiz.order.get(id)`
- `wiz.order.create(data)`
- `wiz.order.update(id, data)`
- `wiz.order.delete(id)`
- `wiz.order.patchStatus(id, data)`

### Invoice

For detailed documentation, see [Invoice API Documentation](docs/Invoice.md).

- `wiz.invoice.list(params?)`
- `wiz.invoice.get(id)`
- `wiz.invoice.create(data)`
- `wiz.invoice.update(id, data)`
- `wiz.invoice.delete(id)`

### Attribute

For detailed documentation, see [Attribute API Documentation](docs/Attribute.md).

- `wiz.attribute.list(params?)`

### Inventory

For detailed documentation, see [Inventory API Documentation](docs/Inventory.md).

- `wiz.inventory.list(params?)`
- `wiz.inventory.update(data)`

### Payment Method

For detailed documentation, see [Payment Method API Documentation](docs/PaymentMethod.md).

- `wiz.paymentmethod.list(params?)`
- `wiz.paymentmethod.create(data)`
- `wiz.paymentmethod.delete(id)`

### Price List

For detailed documentation, see [Price List API Documentation](docs/PriceList.md).

- `wiz.pricelist.list(params?)`
- `wiz.pricelist.get(id)`
- `wiz.pricelist.create(data)`
- `wiz.pricelist.update(id, data)`
- `wiz.pricelist.delete(id)`

### Product Pricing

For detailed documentation, see [Product Pricing API Documentation](docs/ProductPricing.md).

- `wiz.productpricing.list(params?)`
- `wiz.productpricing.update(id, data)`

### Sales Rep (User)

For detailed documentation, see [Sales Rep API Documentation](docs/SalesRep.md).

- `wiz.salesrep.list(params?)`

### Shipment

For detailed documentation, see [Shipment API Documentation](docs/Shipment.md).

- `wiz.shipment.list(params?)`
- `wiz.shipment.get(params)`
- `wiz.shipment.create(data)`
- `wiz.shipment.update(id, data)`
- `wiz.shipment.delete(params)`

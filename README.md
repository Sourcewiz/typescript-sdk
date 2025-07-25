# WizCommerce SDK

## Installation

```sh
npm install wizcommerce
```

## Usage

```ts
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List customers
wiz.customer.list().then(console.log);
```

## API

### Customer

- `wiz.customer.list(params?)`
- `wiz.customer.get(id)`
- `wiz.customer.create(data)`
- `wiz.customer.update(id, data)`
- `wiz.customer.delete(id)`
- `wiz.customer.address.list(customerId, params?)`
- `wiz.customer.address.get(customerId, addressId)`
- `wiz.customer.address.create(customerId, data)`
- `wiz.customer.address.update(customerId, addressId, data)`
- `wiz.customer.address.delete(customerId, addressId)`
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

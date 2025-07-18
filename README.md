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

- `wiz.customer.list(params?)`
- `wiz.customer.get(id)`
- `wiz.customer.create(data)`
- `wiz.customer.update(id, data)`
- `wiz.customer.delete(id)`

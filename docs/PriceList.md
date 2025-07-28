# Price List

This module provides methods to work with price list resources in the WizCommerce API.

| Method                | Description               |
| --------------------- | ------------------------- |
| [**list**](#list)     | List all price lists      |
| [**get**](#get)       | Get a specific price list |
| [**create**](#create) | Create a price list       |
| [**update**](#update) | Update a price list       |
| [**delete**](#delete) | Delete a price list       |

## list

> list(params?: PriceListRequest): Promise<PriceListResponse[]>

List all price lists

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List price lists with pagination
wiz.pricelist
  .list({
    page: 1,
    page_size: 20,
  })
  .then((priceLists) => {
    console.log(`Found ${priceLists.length} price lists`);
    console.log(priceLists);
  })
  .catch((error) => {
    console.error("Error listing price lists:", error);
  });
```

### Parameters

| Name          | Type       | Description                | Required |
| ------------- | ---------- | -------------------------- | -------- |
| **page**      | **number** | Page number for pagination | No       |
| **page_size** | **number** | Number of items per page   | No       |

### Response

```json
[
  {
    "id": "plist_123456",
    "name": "Standard Price List",
    "description": "Default prices for all customers",
    "currency": "USD",
    "is_default": true,
    "status": "active",
    "effective_from": "2023-01-01T00:00:00Z",
    "effective_to": null,
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  },
  {
    "id": "plist_234567",
    "name": "Wholesale Price List",
    "description": "Special pricing for wholesale customers",
    "currency": "USD",
    "is_default": false,
    "status": "active",
    "effective_from": "2023-01-01T00:00:00Z",
    "effective_to": "2023-12-31T23:59:59Z",
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  }
  // ... more price lists
]
```

## get

> get(id: string): Promise<PriceListDetailsResponse>

Get a specific price list

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Get a specific price list
wiz.pricelist
  .get("plist_123456")
  .then((priceList) => {
    console.log("Price list details:", priceList);
  })
  .catch((error) => {
    console.error("Error fetching price list:", error);
  });
```

### Parameters

| Name   | Type       | Description   | Required |
| ------ | ---------- | ------------- | -------- |
| **id** | **string** | Price list ID | Yes      |

### Response

```json
{
  "id": "plist_123456",
  "name": "Standard Price List",
  "description": "Default prices for all customers",
  "currency": "USD",
  "is_default": true,
  "status": "active",
  "effective_from": "2023-01-01T00:00:00Z",
  "effective_to": null,
  "products": [
    {
      "id": "priceprod_123456",
      "product_id": "prod_123456",
      "product_name": "Widget Pro",
      "sku": "WIDGET-PRO",
      "price": 75.0,
      "list_price": 95.0,
      "cost_price": 50.0,
      "margin": 33.33,
      "effective_from": "2023-01-01T00:00:00Z",
      "effective_to": null
    },
    {
      "id": "priceprod_234567",
      "product_id": "prod_234567",
      "product_name": "Widget Ultra",
      "sku": "WIDGET-ULTRA",
      "price": 125.0,
      "list_price": 150.0,
      "cost_price": 80.0,
      "margin": 36.0,
      "effective_from": "2023-01-01T00:00:00Z",
      "effective_to": null
    }
  ],
  "customer_groups": [
    {
      "id": "custgroup_123456",
      "name": "All Customers"
    }
  ],
  "created_at": "2023-01-15T10:30:00Z",
  "updated_at": "2023-01-15T10:30:00Z"
}
```

## create

> create(data: PriceListCreateRequest): Promise<PriceListDetailsResponse>

Create a new price list

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Create a new price list
const priceListData = {
  name: "Promotional Price List",
  description: "Special pricing for summer promotion",
  currency: "USD",
  is_default: false,
  status: "active",
  effective_from: "2023-06-01T00:00:00Z",
  effective_to: "2023-08-31T23:59:59Z",
};

wiz.pricelist
  .create(priceListData)
  .then((newPriceList) => {
    console.log("Price list created:", newPriceList);
  })
  .catch((error) => {
    console.error("Error creating price list:", error);
  });
```

### Parameters

| Name     | Type                       | Description     | Required |
| -------- | -------------------------- | --------------- | -------- |
| **data** | **PriceListCreateRequest** | Price list data | Yes      |

#### PriceListCreateRequest

| Name               | Type        | Description                   | Required |
| ------------------ | ----------- | ----------------------------- | -------- |
| **name**           | **string**  | Price list name               | Yes      |
| **description**    | **string**  | Description                   | No       |
| **currency**       | **string**  | Currency code                 | Yes      |
| **is_default**     | **boolean** | Whether it's the default list | No       |
| **status**         | **string**  | Status (active, inactive)     | Yes      |
| **effective_from** | **string**  | Start date (ISO format)       | Yes      |
| **effective_to**   | **string**  | End date (ISO format)         | No       |

### Response

Returns a [PriceListDetailsResponse](#get) object on success.

## update

> update(id: string, data: PriceListUpdateRequest): Promise<PriceListDetailsResponse>

Update an existing price list

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update an existing price list
const priceListUpdates = {
  name: "Summer Promotional Price List",
  description: "Special pricing for extended summer promotion",
  effective_to: "2023-09-30T23:59:59Z",
};

wiz.pricelist
  .update("plist_123456", priceListUpdates)
  .then((updatedPriceList) => {
    console.log("Price list updated:", updatedPriceList);
  })
  .catch((error) => {
    console.error("Error updating price list:", error);
  });
```

### Parameters

| Name     | Type                       | Description            | Required |
| -------- | -------------------------- | ---------------------- | -------- |
| **id**   | **string**                 | Price list ID          | Yes      |
| **data** | **PriceListUpdateRequest** | Price list update data | Yes      |

#### PriceListUpdateRequest

| Name               | Type        | Description                   | Required |
| ------------------ | ----------- | ----------------------------- | -------- |
| **name**           | **string**  | Price list name               | No       |
| **description**    | **string**  | Description                   | No       |
| **currency**       | **string**  | Currency code                 | No       |
| **is_default**     | **boolean** | Whether it's the default list | No       |
| **status**         | **string**  | Status (active, inactive)     | No       |
| **effective_from** | **string**  | Start date (ISO format)       | No       |
| **effective_to**   | **string**  | End date (ISO format)         | No       |

### Response

Returns a [PriceListDetailsResponse](#get) object on success.

## delete

> delete(id: string): Promise<void>

Delete a price list

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Delete a price list
wiz.pricelist
  .delete("plist_123456")
  .then(() => {
    console.log("Price list deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting price list:", error);
  });
```

### Parameters

| Name   | Type       | Description   | Required |
| ------ | ---------- | ------------- | -------- |
| **id** | **string** | Price list ID | Yes      |

### Response

No content returned on success.

# Product Pricing

This module provides methods to work with product pricing resources in the WizCommerce API.

| Method                | Description              |
| --------------------- | ------------------------ |
| [**list**](#list)     | List all product pricing |
| [**update**](#update) | Update product pricing   |

## list

> list(params?: ProductPricingListRequest): Promise<ProductPricingResponse[]>

List all product pricing entries

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List product pricing with pagination and filters
wiz.productpricing
  .list({
    page: 1,
    page_size: 20,
    price_list_id: "plist_123456",
  })
  .then((pricings) => {
    console.log(`Found ${pricings.length} product pricing entries`);
    console.log(pricings);
  })
  .catch((error) => {
    console.error("Error listing product pricing:", error);
  });
```

### Parameters

| Name              | Type       | Description                | Required |
| ----------------- | ---------- | -------------------------- | -------- |
| **page**          | **number** | Page number for pagination | No       |
| **page_size**     | **number** | Number of items per page   | No       |
| **price_list_id** | **string** | Filter by price list ID    | No       |
| **product_id**    | **string** | Filter by product ID       | No       |
| **sku**           | **string** | Filter by product SKU      | No       |

### Response

```json
[
  {
    "id": "priceprod_123456",
    "price_list_id": "plist_123456",
    "price_list_name": "Standard Price List",
    "product_id": "prod_123456",
    "product_name": "Widget Pro",
    "sku": "WIDGET-PRO",
    "price": 75.0,
    "list_price": 95.0,
    "cost_price": 50.0,
    "margin": 33.33,
    "effective_from": "2023-01-01T00:00:00Z",
    "effective_to": null,
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  },
  {
    "id": "priceprod_234567",
    "price_list_id": "plist_123456",
    "price_list_name": "Standard Price List",
    "product_id": "prod_234567",
    "product_name": "Widget Ultra",
    "sku": "WIDGET-ULTRA",
    "price": 125.0,
    "list_price": 150.0,
    "cost_price": 80.0,
    "margin": 36.0,
    "effective_from": "2023-01-01T00:00:00Z",
    "effective_to": null,
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  }
  // ... more product pricing entries
]
```

## update

> update(id: string, data: ProductPricingUpdateRequest): Promise<ProductPricingResponse>

Update pricing for a product within a price list

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update product pricing
const pricingUpdates = {
  price: 70.0,
  list_price: 90.0,
  effective_from: "2023-02-01T00:00:00Z",
};

wiz.productpricing
  .update("priceprod_123456", pricingUpdates)
  .then((updatedPricing) => {
    console.log("Product pricing updated:", updatedPricing);
  })
  .catch((error) => {
    console.error("Error updating product pricing:", error);
  });
```

### Parameters

| Name     | Type                            | Description                 | Required |
| -------- | ------------------------------- | --------------------------- | -------- |
| **id**   | **string**                      | Product pricing ID          | Yes      |
| **data** | **ProductPricingUpdateRequest** | Product pricing update data | Yes      |

#### ProductPricingUpdateRequest

| Name               | Type       | Description             | Required |
| ------------------ | ---------- | ----------------------- | -------- |
| **price**          | **number** | Sale price              | No       |
| **list_price**     | **number** | List/retail price       | No       |
| **cost_price**     | **number** | Cost price              | No       |
| **effective_from** | **string** | Start date (ISO format) | No       |
| **effective_to**   | **string** | End date (ISO format)   | No       |

### Response

```json
{
  "id": "priceprod_123456",
  "price_list_id": "plist_123456",
  "price_list_name": "Standard Price List",
  "product_id": "prod_123456",
  "product_name": "Widget Pro",
  "sku": "WIDGET-PRO",
  "price": 70.0,
  "list_price": 90.0,
  "cost_price": 50.0,
  "margin": 28.57,
  "effective_from": "2023-02-01T00:00:00Z",
  "effective_to": null,
  "created_at": "2023-01-15T10:30:00Z",
  "updated_at": "2023-01-20T14:20:00Z"
}
```

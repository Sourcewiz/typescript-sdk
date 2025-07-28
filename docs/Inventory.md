# Inventory

This module provides methods to work with inventory resources in the WizCommerce API.

| Method                | Description        |
| --------------------- | ------------------ |
| [**list**](#list)     | List all inventory |
| [**update**](#update) | Update inventory   |

## list

> list(params?: InventoryRequest): Promise<InventoryResponse[]>

List all inventory items

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List inventory with pagination and filters
wiz.inventory
  .list({
    page: 1,
    page_size: 20,
    sort_by: "updated_at",
    sort: "desc",
    status: "active",
    sku: "WIDGET-PRO",
  })
  .then((inventoryItems) => {
    console.log(`Found ${inventoryItems.length} inventory items`);
    console.log(inventoryItems);
  })
  .catch((error) => {
    console.error("Error listing inventory:", error);
  });
```

### Parameters

| Name          | Type       | Description                                                       | Required |
| ------------- | ---------- | ----------------------------------------------------------------- | -------- |
| **page**      | **number** | Page number for pagination                                        | No       |
| **page_size** | **number** | Number of items per page                                          | No       |
| **sort_by**   | **string** | Field to sort by ("created_at", "updated_at", "product_id", "id") | No       |
| **sort**      | **string** | Sort direction ("asc" or "desc")                                  | No       |
| **status**    | **string** | Filter by status ("active" or "inactive")                         | No       |
| **sku**       | **string** | Filter by SKU                                                     | No       |

### Response

```json
[
  {
    "id": "inv_123456",
    "product_id": "prod_123456",
    "sku": "WIDGET-PRO",
    "available_quantity": 100,
    "reserved_quantity": 5,
    "in_stock_quantity": 105,
    "back_order_quantity": 0,
    "inventory_status": "IN_STOCK",
    "status": "active",
    "track_inventory": true,
    "on_order_details": [
      {
        "quantity": 50,
        "date": "2023-02-15T10:00:00Z",
        "identifier": "PO-12345"
      }
    ],
    "in_transit_details": [],
    "notes": "",
    "back_order_allowed": true,
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-16T14:20:00Z"
  }
  // ... more inventory items
]
```

## update

> update(data: InventoryCreateRequest): Promise<InventoryResponse>

Update inventory for a product

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update inventory
const inventoryData = {
  sku: "WIDGET-PRO",
  available_quantity: 120,
  reserved_quantity: 5,
  in_stock_quantity: 125,
  inventory_status: "IN_STOCK",
  track_inventory: true,
  out_of_stock_threshold: 10,
  on_order_details: [
    {
      quantity: 50,
      date: "2023-02-15T10:00:00Z",
      identifier: "PO-12345",
    },
  ],
  in_transit_details: [
    {
      quantity: 25,
      date: "2023-02-01T10:00:00Z",
      identifier: "SHIP-6789",
    },
  ],
  notes: "Stock levels updated after inventory check",
};

wiz.inventory
  .update(inventoryData)
  .then((updatedInventory) => {
    console.log("Inventory updated:", updatedInventory);
  })
  .catch((error) => {
    console.error("Error updating inventory:", error);
  });
```

### Parameters

| Name     | Type                       | Description    | Required |
| -------- | -------------------------- | -------------- | -------- |
| **data** | **InventoryCreateRequest** | Inventory data | Yes      |

#### InventoryCreateRequest

| Name                              | Type                   | Description                               | Required |
| --------------------------------- | ---------------------- | ----------------------------------------- | -------- |
| **sku**                           | **string**             | Product SKU                               | Yes      |
| **available_quantity**            | **number**             | Available quantity                        | Yes      |
| **reserved_quantity**             | **number**             | Reserved quantity                         | Yes      |
| **in_stock_quantity**             | **number**             | Total in-stock quantity                   | Yes      |
| **back_order_quantity**           | **number**             | Back order quantity                       | No       |
| **back_order_allowed**            | **boolean**            | Whether back orders are allowed           | No       |
| **out_of_stock_threshold**        | **number**             | Out of stock threshold                    | Yes      |
| **inventory_status**              | **string**             | Status (IN_STOCK/OUT_OF_STOCK/BACK_ORDER) | Yes      |
| **track_inventory**               | **boolean**            | Whether inventory is tracked              | Yes      |
| **on_order_details**              | **OnOrderDetails[]**   | Details of on-order items                 | Yes      |
| **in_transit_details**            | **InTransitDetails[]** | Details of in-transit items               | Yes      |
| **dynamic_details**               | **string**             | Dynamic details (JSON string)             | No       |
| **notes**                         | **string**             | Inventory notes                           | No       |
| **back_order_reserved_quantity**  | **number**             | Reserved back order quantity              | No       |
| **back_order_available_quantity** | **number**             | Available back order quantity             | No       |

#### OnOrderDetails

| Name           | Type       | Description                | Required |
| -------------- | ---------- | -------------------------- | -------- |
| **quantity**   | **number** | Quantity on order          | Yes      |
| **date**       | **string** | Expected date (ISO format) | Yes      |
| **identifier** | **string** | Order identifier           | Yes      |

#### InTransitDetails

| Name           | Type       | Description                | Required |
| -------------- | ---------- | -------------------------- | -------- |
| **quantity**   | **number** | Quantity in transit        | Yes      |
| **date**       | **string** | Expected date (ISO format) | Yes      |
| **identifier** | **string** | Shipment identifier        | Yes      |

### Response

Returns an [InventoryResponse](#list-response) object on success.

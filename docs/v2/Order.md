# Order

This module provides methods to work with order resources in the WizCommerce API.

| Method                          | Description          |
| ------------------------------- | -------------------- |
| [**list**](#list)               | List all orders      |
| [**get**](#get)                 | Get a specific order |
| [**create**](#create)           | Create an order      |
| [**update**](#update)           | Update an order      |
| [**delete**](#delete)           | Delete an order      |
| [**patchStatus**](#patchStatus) | Update order status  |

## list

> list(params?: OrderListRequest): Promise<OrderListResponse[]>

List all orders

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List orders with pagination
wiz.order
  .list({
    page: 1,
    page_size: 20,
    sort_by: "created_at",
    sort: "desc",
    status: "new",
  })
  .then((orders) => {
    console.log(`Found ${orders.length} orders`);
    console.log(orders);
  })
  .catch((error) => {
    console.error("Error listing orders:", error);
  });
```

### Parameters

| Name             | Type       | Description                | Required |
| ---------------- | ---------- | -------------------------- | -------- |
| **page**         | **number** | Page number for pagination | No       |
| **page_size**    | **number** | Number of items per page   | No       |
| **sort_by**      | **string** | Field to sort by           | No       |
| **sort**         | **string** | Sort direction (asc/desc)  | No       |
| **status**       | **string** | Filter by order status     | No       |
| **customer_id**  | **string** | Filter by customer ID      | No       |
| **reference_id** | **string** | Filter by reference ID     | No       |

### Response

```json
[
  {
    "id": "order_123456",
    "customer_id": "cust_123456",
    "reference_id": "ORD-001",
    "order_number": "10001",
    "status": "new",
    "total_amount": 150.0,
    "currency": "USD",
    "payment_status": "pending",
    "shipping_address": {
      "id": "addr_789012",
      "name": "John Doe",
      "address_line1": "123 Main St"
      // ... other address fields
    },
    "billing_address": {
      "id": "addr_345678",
      "name": "John Doe",
      "address_line1": "123 Main St"
      // ... other address fields
    },
    "items": [
      {
        "id": "item_123456",
        "product_id": "prod_123456",
        "quantity": 2,
        "price": 75.0
        // ... other item fields
      }
    ],
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  }
  // ... more orders
]
```

## get

> get(id: string): Promise<OrderDetailsResponse>

Get a specific order

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Get a specific order
wiz.order
  .get("order_123456")
  .then((order) => {
    console.log("Order details:", order);
  })
  .catch((error) => {
    console.error("Error fetching order:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Order ID    | Yes      |

### Response

```json
{
  "id": "order_123456",
  "customer_id": "cust_123456",
  "customer": {
    "id": "cust_123456",
    "name": "Acme Inc.",
    "email": "info@acme.com",
    "phone": "+1-415-555-1234"
  },
  "reference_id": "ORD-001",
  "order_number": "10001",
  "status": "new",
  "total_amount": 150.0,
  "subtotal": 140.0,
  "tax_amount": 10.0,
  "shipping_amount": 0.0,
  "discount_amount": 0.0,
  "currency": "USD",
  "payment_status": "pending",
  "shipping_address": {
    "id": "addr_789012",
    "name": "John Doe",
    "address_line1": "123 Main St",
    "address_line2": "Suite 200",
    "city": "San Francisco",
    "state": "CA",
    "country": "USA",
    "zip_code": "94105",
    "phone": "+1-415-555-5678"
  },
  "billing_address": {
    "id": "addr_345678",
    "name": "John Doe",
    "address_line1": "123 Main St",
    "address_line2": "Suite 200",
    "city": "San Francisco",
    "state": "CA",
    "country": "USA",
    "zip_code": "94105",
    "phone": "+1-415-555-5678"
  },
  "items": [
    {
      "id": "item_123456",
      "product_id": "prod_123456",
      "product_name": "Widget Pro",
      "sku": "WID-PRO-001",
      "quantity": 2,
      "unit_price": 70.0,
      "price": 140.0,
      "tax_amount": 10.0,
      "discount_amount": 0.0,
      "attributes": [
        {
          "name": "Color",
          "value": "Red"
        }
      ]
    }
  ],
  "notes": "Please deliver during business hours",
  "attributes": [
    {
      "name": "priority",
      "value": "high"
    }
  ],
  "created_at": "2023-01-15T10:30:00Z",
  "updated_at": "2023-01-15T10:30:00Z"
}
```

## create

> create(data: OrderCreateRequest): Promise<OrderDetailsResponse>

Create a new order

### Example

```json
{
  "customer_id": "cust_123456",
  "reference_id": "ORD-002",
  "shipping_address_id": "addr_789012",
  "billing_address_id": "addr_345678",
  "currency": "USD",
  "notes": "Please deliver during business hours",
  "items": [
    {
      "product_id": "prod_123456",
      "quantity": 2,
      "unit_price": 75.0,
      "discount_amount": 0,
      "notes": "Urgent delivery"
    },
    {
      "product_id": "prod_234567",
      "quantity": 1,
      "unit_price": 50.0,
      "discount_amount": 5.0,
      "notes": ""
    }
  ],
  "attributes": [
    {
      "name": "priority",
      "value": "high"
    }
  ]
}
```

### Parameters

| Name     | Type                   | Description | Required |
| -------- | ---------------------- | ----------- | -------- |
| **data** | **OrderCreateRequest** | Order data  | Yes      |

#### OrderCreateRequest

| Name                    | Type                   | Description         | Required |
| ----------------------- | ---------------------- | ------------------- | -------- |
| **customer_id**         | **string**             | Customer ID         | Yes      |
| **reference_id**        | **string**             | Unique reference ID | Yes      |
| **shipping_address_id** | **string**             | Shipping address ID | Yes      |
| **billing_address_id**  | **string**             | Billing address ID  | No       |
| **currency**            | **string**             | Currency code       | Yes      |
| **notes**               | **string**             | Order notes         | No       |
| **items**               | **OrderItemRequest[]** | Order items         | Yes      |
| **attributes**          | **any[]**              | Order attributes    | No       |

#### OrderItemRequest

| Name                | Type       | Description     | Required |
| ------------------- | ---------- | --------------- | -------- |
| **product_id**      | **string** | Product ID      | Yes      |
| **quantity**        | **number** | Quantity        | Yes      |
| **unit_price**      | **number** | Unit price      | Yes      |
| **discount_amount** | **number** | Discount amount | No       |
| **notes**           | **string** | Item notes      | No       |

### Response

Returns an [OrderDetailsResponse](#get) object on success.

## update

> update(id: string, data: OrderUpdateRequest): Promise<OrderDetailsResponse>

Update an existing order

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update an existing order
const orderUpdates = {
  notes: "Please deliver on Monday",
  items: [
    {
      id: "item_123456",
      quantity: 3,
    },
  ],
};

wiz.order
  .update("order_123456", orderUpdates)
  .then((updatedOrder) => {
    console.log("Order updated:", updatedOrder);
  })
  .catch((error) => {
    console.error("Error updating order:", error);
  });
```

### Parameters

| Name     | Type                   | Description       | Required |
| -------- | ---------------------- | ----------------- | -------- |
| **id**   | **string**             | Order ID          | Yes      |
| **data** | **OrderUpdateRequest** | Order update data | Yes      |

#### OrderUpdateRequest

| Name                    | Type                         | Description           | Required |
| ----------------------- | ---------------------------- | --------------------- | -------- |
| **reference_id**        | **string**                   | Unique reference ID   | No       |
| **shipping_address_id** | **string**                   | Shipping address ID   | No       |
| **billing_address_id**  | **string**                   | Billing address ID    | No       |
| **notes**               | **string**                   | Order notes           | No       |
| **items**               | **OrderItemUpdateRequest[]** | Order items to update | No       |
| **attributes**          | **any[]**                    | Order attributes      | No       |

#### OrderItemUpdateRequest

| Name                | Type       | Description                  | Required |
| ------------------- | ---------- | ---------------------------- | -------- |
| **id**              | **string** | Item ID (for existing items) | No       |
| **product_id**      | **string** | Product ID (for new items)   | No       |
| **quantity**        | **number** | Quantity                     | No       |
| **unit_price**      | **number** | Unit price                   | No       |
| **discount_amount** | **number** | Discount amount              | No       |
| **notes**           | **string** | Item notes                   | No       |

### Response

Returns an [OrderDetailsResponse](#get) object on success.

## delete

> delete(id: string): Promise<void>

Delete an order

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Delete an order
wiz.order
  .delete("order_123456")
  .then(() => {
    console.log("Order deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting order:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Order ID    | Yes      |

### Response

No content returned on success.

## patchStatus

> patchStatus(id: string, data: OrderStatusRequest): Promise<OrderDetailsResponse>

Update an order's status

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update an order's status
const statusUpdate = {
  status: "processing",
};

wiz.order
  .patchStatus("order_123456", statusUpdate)
  .then((updatedOrder) => {
    console.log("Order status updated:", updatedOrder);
  })
  .catch((error) => {
    console.error("Error updating order status:", error);
  });
```

### Parameters

| Name     | Type                   | Description        | Required |
| -------- | ---------------------- | ------------------ | -------- |
| **id**   | **string**             | Order ID           | Yes      |
| **data** | **OrderStatusRequest** | Status update data | Yes      |

#### OrderStatusRequest

| Name       | Type       | Description      | Required |
| ---------- | ---------- | ---------------- | -------- |
| **status** | **string** | New order status | Yes      |

### Response

Returns an [OrderDetailsResponse](#get) object on success.

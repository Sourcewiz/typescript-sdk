# Shipment

This module provides methods to work with shipment resources in the WizCommerce API.

| Method                | Description             |
| --------------------- | ----------------------- |
| [**list**](#list)     | List all shipments      |
| [**get**](#get)       | Get a specific shipment |
| [**create**](#create) | Create a shipment       |
| [**update**](#update) | Update a shipment       |
| [**delete**](#delete) | Delete a shipment       |

## list

> list(params?: ShipmentListRequest): Promise<ShipmentListResponse[]>

List all shipments

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List shipments with pagination and filters
wiz.shipment
  .list({
    page: 1,
    page_size: 20,
    order_id: "order_123456",
    status: "shipped",
  })
  .then((shipments) => {
    console.log(`Found ${shipments.length} shipments`);
    console.log(shipments);
  })
  .catch((error) => {
    console.error("Error listing shipments:", error);
  });
```

### Parameters

| Name          | Type       | Description                 | Required |
| ------------- | ---------- | --------------------------- | -------- |
| **page**      | **number** | Page number for pagination  | No       |
| **page_size** | **number** | Number of items per page    | No       |
| **order_id**  | **string** | Filter by order ID          | No       |
| **status**    | **string** | Filter by status            | No       |
| **date_from** | **string** | Filter by date (ISO format) | No       |
| **date_to**   | **string** | Filter by date (ISO format) | No       |

### Response

```json
[
  {
    "id": "ship_123456",
    "order_id": "order_123456",
    "order_number": "10001",
    "customer_id": "cust_123456",
    "customer_name": "Acme Inc.",
    "tracking_number": "1Z999AA10123456789",
    "carrier": "UPS",
    "service": "Ground",
    "status": "shipped",
    "shipped_date": "2023-01-20T14:30:00Z",
    "estimated_delivery_date": "2023-01-25T00:00:00Z",
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-20T14:30:00Z"
  },
  {
    "id": "ship_234567",
    "order_id": "order_234567",
    "order_number": "10002",
    "customer_id": "cust_234567",
    "customer_name": "XYZ Corp",
    "tracking_number": "9405511899223157253742",
    "carrier": "USPS",
    "service": "Priority",
    "status": "delivered",
    "shipped_date": "2023-01-18T11:45:00Z",
    "estimated_delivery_date": "2023-01-20T00:00:00Z",
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-21T09:15:00Z"
  }
  // ... more shipments
]
```

## get

> get(params: ShipmentGetParams): Promise<ShipmentDetailsResponse>

Get a specific shipment

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Get a specific shipment
wiz.shipment
  .get({ id: "ship_123456" })
  .then((shipment) => {
    console.log("Shipment details:", shipment);
  })
  .catch((error) => {
    console.error("Error fetching shipment:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Shipment ID | Yes      |

### Response

```json
{
  "id": "ship_123456",
  "order_id": "order_123456",
  "order_number": "10001",
  "customer_id": "cust_123456",
  "customer_name": "Acme Inc.",
  "tracking_number": "1Z999AA10123456789",
  "carrier": "UPS",
  "service": "Ground",
  "status": "shipped",
  "shipped_date": "2023-01-20T14:30:00Z",
  "estimated_delivery_date": "2023-01-25T00:00:00Z",
  "shipping_address": {
    "id": "addr_789012",
    "name": "John Doe",
    "company": "Acme Inc.",
    "line1": "123 Main St",
    "line2": "Suite 100",
    "city": "San Francisco",
    "state": "CA",
    "postal_code": "94105",
    "country": "USA",
    "phone": "+1234567890"
  },
  "items": [
    {
      "id": "item_123456",
      "order_item_id": "orderitem_123456",
      "product_id": "prod_123456",
      "product_name": "Widget Pro",
      "sku": "WIDGET-PRO",
      "quantity": 2,
      "weight": 3.0,
      "weight_unit": "kg",
      "dimensions": {
        "length": 10,
        "width": 5,
        "height": 2,
        "unit": "cm"
      }
    }
  ],
  "package_details": {
    "weight": 3.5,
    "weight_unit": "kg",
    "dimensions": {
      "length": 15,
      "width": 10,
      "height": 5,
      "unit": "cm"
    }
  },
  "tracking_url": "https://www.ups.com/track?tracknum=1Z999AA10123456789",
  "tracking_events": [
    {
      "date": "2023-01-20T14:30:00Z",
      "status": "Shipment picked up",
      "location": "San Francisco, CA"
    },
    {
      "date": "2023-01-22T08:15:00Z",
      "status": "In transit",
      "location": "Sacramento, CA"
    }
  ],
  "notes": "Handle with care",
  "created_at": "2023-01-15T10:30:00Z",
  "updated_at": "2023-01-22T08:15:00Z"
}
```

## create

> create(data: ShipmentCreateRequest): Promise<ShipmentDetailsResponse>

Create a new shipment

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Create a new shipment
const shipmentData = {
  order_id: "order_123456",
  carrier: "FedEx",
  service: "Express",
  tracking_number: "794644746465",
  items: [
    {
      order_item_id: "orderitem_123456",
      quantity: 2,
    },
    {
      order_item_id: "orderitem_234567",
      quantity: 1,
    },
  ],
  package_details: {
    weight: 4.2,
    weight_unit: "kg",
    dimensions: {
      length: 20,
      width: 15,
      height: 10,
      unit: "cm",
    },
  },
  shipped_date: "2023-01-25T14:00:00Z",
  estimated_delivery_date: "2023-01-27T00:00:00Z",
  notes: "Leave at front door if no answer",
};

wiz.shipment
  .create(shipmentData)
  .then((newShipment) => {
    console.log("Shipment created:", newShipment);
  })
  .catch((error) => {
    console.error("Error creating shipment:", error);
  });
```

### Parameters

| Name     | Type                      | Description   | Required |
| -------- | ------------------------- | ------------- | -------- |
| **data** | **ShipmentCreateRequest** | Shipment data | Yes      |

#### ShipmentCreateRequest

| Name                        | Type                      | Description                     | Required |
| --------------------------- | ------------------------- | ------------------------------- | -------- |
| **order_id**                | **string**                | Order ID                        | Yes      |
| **carrier**                 | **string**                | Shipping carrier                | Yes      |
| **service**                 | **string**                | Shipping service                | Yes      |
| **tracking_number**         | **string**                | Tracking number                 | Yes      |
| **items**                   | **ShipmentItemRequest[]** | Items to ship                   | Yes      |
| **package_details**         | **PackageDetails**        | Package details                 | No       |
| **shipped_date**            | **string**                | Ship date (ISO format)          | Yes      |
| **estimated_delivery_date** | **string**                | Est. delivery date (ISO format) | No       |
| **notes**                   | **string**                | Shipment notes                  | No       |

#### ShipmentItemRequest

| Name              | Type       | Description      | Required |
| ----------------- | ---------- | ---------------- | -------- |
| **order_item_id** | **string** | Order item ID    | Yes      |
| **quantity**      | **number** | Quantity to ship | Yes      |

### Response

Returns a [ShipmentDetailsResponse](#get) object on success.

## update

> update(id: string, data: ShipmentUpdateRequest): Promise<ShipmentDetailsResponse>

Update an existing shipment

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update an existing shipment
const shipmentUpdates = {
  status: "delivered",
  tracking_events: [
    {
      date: "2023-01-27T09:30:00Z",
      status: "Delivered",
      location: "San Francisco, CA",
    },
  ],
};

wiz.shipment
  .update("ship_123456", shipmentUpdates)
  .then((updatedShipment) => {
    console.log("Shipment updated:", updatedShipment);
  })
  .catch((error) => {
    console.error("Error updating shipment:", error);
  });
```

### Parameters

| Name     | Type                      | Description          | Required |
| -------- | ------------------------- | -------------------- | -------- |
| **id**   | **string**                | Shipment ID          | Yes      |
| **data** | **ShipmentUpdateRequest** | Shipment update data | Yes      |

#### ShipmentUpdateRequest

| Name                        | Type                | Description                     | Required |
| --------------------------- | ------------------- | ------------------------------- | -------- |
| **carrier**                 | **string**          | Shipping carrier                | No       |
| **service**                 | **string**          | Shipping service                | No       |
| **tracking_number**         | **string**          | Tracking number                 | No       |
| **status**                  | **string**          | Shipment status                 | No       |
| **shipped_date**            | **string**          | Ship date (ISO format)          | No       |
| **estimated_delivery_date** | **string**          | Est. delivery date (ISO format) | No       |
| **tracking_events**         | **TrackingEvent[]** | Tracking events                 | No       |
| **notes**                   | **string**          | Shipment notes                  | No       |

### Response

Returns a [ShipmentDetailsResponse](#get) object on success.

## delete

> delete(params: ShipmentDeleteParams): Promise<void>

Delete a shipment

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Delete a shipment
wiz.shipment
  .delete({ id: "ship_123456" })
  .then(() => {
    console.log("Shipment deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting shipment:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Shipment ID | Yes      |

### Response

No content returned on success.

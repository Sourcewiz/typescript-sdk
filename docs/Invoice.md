# Invoice

This module provides methods to work with invoice resources in the WizCommerce API.

| Method                | Description            |
| --------------------- | ---------------------- |
| [**list**](#list)     | List all invoices      |
| [**get**](#get)       | Get a specific invoice |
| [**create**](#create) | Create an invoice      |
| [**update**](#update) | Update an invoice      |
| [**delete**](#delete) | Delete an invoice      |

## list

> list(params?: InvoiceListParams): Promise<InvoiceListResponse[]>

List all invoices

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List invoices with pagination and filters
wiz.invoice
  .list({
    page: 1,
    page_size: 20,
    sort_by: "created_at",
    sort: "desc",
    status: "unpaid",
    customer_id: "cust_123456",
  })
  .then((invoices) => {
    console.log(`Found ${invoices.length} invoices`);
    console.log(invoices);
  })
  .catch((error) => {
    console.error("Error listing invoices:", error);
  });
```

### Parameters

| Name            | Type       | Description                 | Required |
| --------------- | ---------- | --------------------------- | -------- |
| **page**        | **number** | Page number for pagination  | No       |
| **page_size**   | **number** | Number of items per page    | No       |
| **sort_by**     | **string** | Field to sort by            | No       |
| **sort**        | **string** | Sort direction (asc/desc)   | No       |
| **status**      | **string** | Filter by invoice status    | No       |
| **customer_id** | **string** | Filter by customer ID       | No       |
| **order_id**    | **string** | Filter by order ID          | No       |
| **date_from**   | **string** | Filter by date (ISO format) | No       |
| **date_to**     | **string** | Filter by date (ISO format) | No       |

### Response

```json
[
  {
    "id": "inv_123456",
    "invoice_number": "INV-10001",
    "customer_id": "cust_123456",
    "customer_name": "Acme Inc.",
    "order_id": "order_123456",
    "order_number": "10001",
    "status": "unpaid",
    "amount": 150.0,
    "tax_amount": 10.0,
    "total_amount": 160.0,
    "currency": "USD",
    "issue_date": "2023-01-15T10:30:00Z",
    "due_date": "2023-02-15T10:30:00Z",
    "createdAt": "2023-01-15T10:30:00Z",
    "updatedAt": "2023-01-15T10:30:00Z"
  }
  // ... more invoices
]
```

## get

> get(id: string): Promise<InvoiceDetailsResponse>

Get a specific invoice

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Get a specific invoice
wiz.invoice
  .get("inv_123456")
  .then((invoice) => {
    console.log("Invoice details:", invoice);
  })
  .catch((error) => {
    console.error("Error fetching invoice:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Invoice ID  | Yes      |

### Response

```json
{
  "id": "inv_123456",
  "invoice_number": "INV-10001",
  "reference_id": "REF-10001",
  "customer_id": "cust_123456",
  "customer": {
    "id": "cust_123456",
    "name": "Acme Inc.",
    "email": "accounting@acme.com",
    "billing_address": {
      "id": "addr_123456",
      "line1": "123 Main St",
      "city": "San Francisco",
      "state": "CA",
      "postal_code": "94105",
      "country": "USA"
    }
  },
  "order_id": "order_123456",
  "order_number": "10001",
  "status": "unpaid",
  "amount": 150.0,
  "tax_amount": 10.0,
  "shipping_amount": 0.0,
  "discount_amount": 0.0,
  "total_amount": 160.0,
  "currency": "USD",
  "issue_date": "2023-01-15T10:30:00Z",
  "due_date": "2023-02-15T10:30:00Z",
  "payment_terms": "Net 30",
  "notes": "Please pay within 30 days",
  "items": [
    {
      "id": "item_123456",
      "product_id": "prod_123456",
      "product_name": "Widget Pro",
      "sku": "WIDGET-PRO",
      "quantity": 2,
      "unit_price": 75.0,
      "tax_amount": 5.0,
      "discount_amount": 0.0,
      "line_total": 150.0
    }
  ],
  "payments": [
    {
      "id": "pay_123456",
      "amount": 50.0,
      "date": "2023-01-25T14:30:00Z",
      "method": "credit_card",
      "reference": "TXREF-123456"
    }
  ],
  "attributes": [],
  "createdAt": "2023-01-15T10:30:00Z",
  "updatedAt": "2023-01-25T14:30:00Z"
}
```

## create

> create(data: InvoiceCreateRequest): Promise<InvoiceDetailsResponse>

Create a new invoice

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Create a new invoice
const invoiceData = {
  customer_id: "cust_123456",
  order_id: "order_123456",
  reference_id: "REF-10002",
  issue_date: "2023-01-20T10:00:00Z",
  due_date: "2023-02-20T10:00:00Z",
  currency: "USD",
  payment_terms: "Net 30",
  notes: "Please pay within 30 days",
  items: [
    {
      product_id: "prod_123456",
      quantity: 2,
      unit_price: 75.0,
    },
    {
      product_id: "prod_234567",
      quantity: 1,
      unit_price: 50.0,
    },
  ],
};

wiz.invoice
  .create(invoiceData)
  .then((newInvoice) => {
    console.log("Invoice created:", newInvoice);
  })
  .catch((error) => {
    console.error("Error creating invoice:", error);
  });
```

### Parameters

| Name     | Type                     | Description  | Required |
| -------- | ------------------------ | ------------ | -------- |
| **data** | **InvoiceCreateRequest** | Invoice data | Yes      |

#### InvoiceCreateRequest

| Name              | Type                     | Description             | Required |
| ----------------- | ------------------------ | ----------------------- | -------- |
| **customer_id**   | **string**               | Customer ID             | Yes      |
| **order_id**      | **string**               | Order ID                | No       |
| **reference_id**  | **string**               | Reference ID            | No       |
| **issue_date**    | **string**               | Issue date (ISO format) | Yes      |
| **due_date**      | **string**               | Due date (ISO format)   | Yes      |
| **currency**      | **string**               | Currency code           | Yes      |
| **payment_terms** | **string**               | Payment terms           | No       |
| **notes**         | **string**               | Invoice notes           | No       |
| **items**         | **InvoiceItemRequest[]** | Invoice items           | Yes      |
| **attributes**    | **any[]**                | Invoice attributes      | No       |

#### InvoiceItemRequest

| Name            | Type       | Description      | Required |
| --------------- | ---------- | ---------------- | -------- |
| **product_id**  | **string** | Product ID       | Yes      |
| **quantity**    | **number** | Quantity         | Yes      |
| **unit_price**  | **number** | Unit price       | Yes      |
| **description** | **string** | Item description | No       |

### Response

Returns an [InvoiceDetailsResponse](#get) object on success.

## update

> update(id: string, data: InvoiceUpdateRequest): Promise<InvoiceDetailsResponse>

Update an existing invoice

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update an existing invoice
const invoiceUpdates = {
  due_date: "2023-03-01T10:00:00Z",
  notes: "Extended payment terms to 45 days",
  status: "partially_paid",
};

wiz.invoice
  .update("inv_123456", invoiceUpdates)
  .then((updatedInvoice) => {
    console.log("Invoice updated:", updatedInvoice);
  })
  .catch((error) => {
    console.error("Error updating invoice:", error);
  });
```

### Parameters

| Name     | Type                     | Description         | Required |
| -------- | ------------------------ | ------------------- | -------- |
| **id**   | **string**               | Invoice ID          | Yes      |
| **data** | **InvoiceUpdateRequest** | Invoice update data | Yes      |

#### InvoiceUpdateRequest

| Name              | Type       | Description           | Required |
| ----------------- | ---------- | --------------------- | -------- |
| **reference_id**  | **string** | Reference ID          | No       |
| **due_date**      | **string** | Due date (ISO format) | No       |
| **status**        | **string** | Invoice status        | No       |
| **payment_terms** | **string** | Payment terms         | No       |
| **notes**         | **string** | Invoice notes         | No       |
| **attributes**    | **any[]**  | Invoice attributes    | No       |

### Response

Returns an [InvoiceDetailsResponse](#get) object on success.

## delete

> delete(id: string): Promise<void>

Delete an invoice

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Delete an invoice
wiz.invoice
  .delete("inv_123456")
  .then(() => {
    console.log("Invoice deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting invoice:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Invoice ID  | Yes      |

### Response

No content returned on success.

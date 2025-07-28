# Customer

This module provides methods to work with customer resources in the WizCommerce API.

| Method                | Description             |
| --------------------- | ----------------------- |
| [**list**](#list)     | List all customers      |
| [**get**](#get)       | Get a specific customer |
| [**create**](#create) | Create a customer       |
| [**update**](#update) | Update a customer       |
| [**delete**](#delete) | Delete a customer       |

## list

> list(params?: CustomerListRequest): Promise<CustomerListResponse[]>

List all customers

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List customers with pagination
wiz.customer
  .list({
    page: 1,
    page_size: 20,
    sortBy: "created_at",
    sort: "desc",
    status: "active",
  })
  .then((customers) => {
    console.log(`Found ${customers.length} customers`);
    console.log(customers);
  })
  .catch((error) => {
    console.error("Error listing customers:", error);
  });
```

### Parameters

| Name             | Type         | Description                | Required |
| ---------------- | ------------ | -------------------------- | -------- |
| **page**         | **number**   | Page number for pagination | No       |
| **page_size**    | **number**   | Number of items per page   | No       |
| **sortBy**       | **string**   | Field to sort by           | No       |
| **sort**         | **string**   | Sort direction (asc/desc)  | No       |
| **status**       | **string**   | Filter by status           | No       |
| **referenceIds** | **string[]** | Filter by reference IDs    | No       |

### Response

```json
[
  {
    "id": "cust_123456789",
    "referenceId": "CUST001",
    "displayId": "C001",
    "name": "Acme Inc.",
    "displayName": "Acme",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "email": "john.doe@acme.com",
    "shippingMethod": "standard",
    "paymentMode": "credit",
    "paymentTerm": "net30",
    "createdAt": "2023-01-15T10:30:00Z",
    "updatedAt": "2023-01-16T14:20:00Z"
  }
  // ... more customers
]
```

## get

> get(id: string): Promise<CustomerDetailsResponse>

Get a specific customer

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Get a specific customer
wiz.customer
  .get("cust_123456789")
  .then((customer) => {
    console.log("Customer details:", customer);
  })
  .catch((error) => {
    console.error("Error fetching customer:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Customer ID | Yes      |

### Response

```json
{
  "id": "cust_123456789",
  "referenceId": "CUST001",
  "displayId": "C001",
  "name": "Acme Inc.",
  "displayName": "Acme",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "email": "john.doe@acme.com",
  "status": "active",
  "freightTerm": "prepaid",
  "shippingMethod": "standard",
  "paymentMode": "credit",
  "paymentTerm": "net30",
  "assignedSalesReps": [
    {
      "id": "rep_123456",
      "name": "Alice Smith"
    }
  ],
  "assignedPriceList": {
    "id": "plist_123456",
    "name": "Standard"
  },
  "addresses": [
    {
      "id": "addr_123456",
      "customerId": "cust_123456789",
      "referenceId": "ADDR001",
      "addressLine1": "123 Main St",
      "city": "San Francisco",
      "state": "CA",
      "country": "USA",
      "zipCode": "94105",
      "type": "billing",
      "isDefault": true
    }
  ],
  "contacts": [
    {
      "id": "cont_123456",
      "referenceId": "CONT001",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@acme.com",
      "phone": "+1987654321",
      "designation": "Purchasing Manager",
      "isDefault": true
    }
  ],
  "attributes": [
    {
      "id": "attr_123456",
      "name": "Industry",
      "entity": "customer",
      "data_type": "select",
      "options": ["Technology", "Healthcare", "Retail"],
      "created_at": "2023-01-15T10:30:00Z",
      "updated_at": "2023-01-15T10:30:00Z"
    }
  ],
  "createdAt": "2023-01-15T10:30:00Z",
  "updatedAt": "2023-01-16T14:20:00Z"
}
```

## create

> create(data: CustomerCreateRequest): Promise<CustomerDetailsResponse>

Create a new customer

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Create a new customer
const customerData = {
  companyName: "Acme Inc.",
  displayName: "Acme",
  referenceId: "CUST001",
  freightTerm: "prepaid",
  shippingMethod: "standard",
  paymentMode: "credit",
  paymentTerm: "net30",
  firstName: "John",
  lastName: "Doe",
  phone: "+1234567890",
  email: "john.doe@acme.com",
  assignedSalesRepIds: ["rep_123456"],
  assignedPriceListID: "plist_123456",
  addresses: [
    {
      referenceId: "ADDR001",
      addressLine1: "123 Main St",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      zipCode: "94105",
      type: "billing",
      isDefault: true,
    },
  ],
  contacts: [
    {
      referenceId: "CONT001",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@acme.com",
      phone: "+1987654321",
      designation: "Purchasing Manager",
      isDefault: true,
    },
  ],
};

wiz.customer
  .create(customerData)
  .then((newCustomer) => {
    console.log("Customer created:", newCustomer);
  })
  .catch((error) => {
    console.error("Error creating customer:", error);
  });
```

### Parameters

| Name     | Type                      | Description   | Required |
| -------- | ------------------------- | ------------- | -------- |
| **data** | **CustomerCreateRequest** | Customer data | Yes      |

#### CustomerCreateRequest

| Name                    | Type                       | Description                   | Required |
| ----------------------- | -------------------------- | ----------------------------- | -------- |
| **companyName**         | **string**                 | Company name                  | Yes      |
| **displayName**         | **string**                 | Display name                  | Yes      |
| **referenceId**         | **string**                 | Unique reference ID           | Yes      |
| **freightTerm**         | **string**                 | Freight terms                 | No       |
| **shippingMethod**      | **string**                 | Shipping method               | No       |
| **paymentMode**         | **string**                 | Payment mode                  | No       |
| **paymentTerm**         | **string**                 | Payment terms                 | No       |
| **firstName**           | **string**                 | First name of primary contact | No       |
| **lastName**            | **string**                 | Last name of primary contact  | No       |
| **phone**               | **string**                 | Phone number                  | No       |
| **email**               | **string**                 | Email address                 | No       |
| **assignedSalesRepIds** | **string[]**               | IDs of assigned sales reps    | No       |
| **assignedPriceListID** | **string**                 | ID of assigned price list     | No       |
| **addresses**           | **AddressCreateRequest[]** | Customer addresses            | No       |
| **contacts**            | **ContactCreateRequest[]** | Customer contacts             | No       |
| **attributes**          | **AttributeResponse[]**    | Customer attributes           | No       |

### Response

Returns a [CustomerDetailsResponse](#get) object on success.

## update

> update(id: string, data: CustomerUpdateRequest): Promise<CustomerDetailsResponse>

Update an existing customer

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update an existing customer
const customerUpdates = {
  displayName: "Acme Corporation",
  phone: "+1987654321",
  paymentTerm: "net45",
};

wiz.customer
  .update("cust_123456789", customerUpdates)
  .then((updatedCustomer) => {
    console.log("Customer updated:", updatedCustomer);
  })
  .catch((error) => {
    console.error("Error updating customer:", error);
  });
```

### Parameters

| Name     | Type                      | Description          | Required |
| -------- | ------------------------- | -------------------- | -------- |
| **id**   | **string**                | Customer ID          | Yes      |
| **data** | **CustomerUpdateRequest** | Customer update data | Yes      |

#### CustomerUpdateRequest

| Name                         | Type                    | Description                    | Required |
| ---------------------------- | ----------------------- | ------------------------------ | -------- |
| **companyName**              | **string**              | Company name                   | No       |
| **displayName**              | **string**              | Display name                   | No       |
| **freightTerm**              | **string**              | Freight terms                  | No       |
| **shippingMethod**           | **string**              | Shipping method                | No       |
| **paymentMode**              | **string**              | Payment mode                   | No       |
| **paymentTerm**              | **string**              | Payment terms                  | No       |
| **primaryContactId**         | **string**              | ID of primary contact          | No       |
| **defaultShippingAddressId** | **string**              | ID of default shipping address | No       |
| **defaultBillingAddressId**  | **string**              | ID of default billing address  | No       |
| **referenceId**              | **string**              | Unique reference ID            | No       |
| **displayId**                | **string**              | Display ID                     | No       |
| **assignedSalesRepIds**      | **string[]**            | IDs of assigned sales reps     | No       |
| **assignedPriceListId**      | **string**              | ID of assigned price list      | No       |
| **firstName**                | **string**              | First name of primary contact  | No       |
| **lastName**                 | **string**              | Last name of primary contact   | No       |
| **phone**                    | **string**              | Phone number                   | No       |
| **email**                    | **string**              | Email address                  | No       |
| **addresses**                | **any[]**               | Customer addresses             | No       |
| **contacts**                 | **any[]**               | Customer contacts              | No       |
| **attributes**               | **AttributeResponse[]** | Customer attributes            | No       |

### Response

Returns a [CustomerDetailsResponse](#get) object on success.

## delete

> delete(id: string): Promise<void>

Delete a customer

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Delete a customer
wiz.customer
  .delete("cust_123456789")
  .then(() => {
    console.log("Customer deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting customer:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Customer ID | Yes      |

### Response

No content returned on success.

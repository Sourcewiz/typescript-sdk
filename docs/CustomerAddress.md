# Customer Address

This module provides methods to work with customer address resources in the WizCommerce API.

| Method                | Description                       |
| --------------------- | --------------------------------- |
| [**list**](#list)     | List all addresses for a customer |
| [**get**](#get)       | Get a specific address            |
| [**create**](#create) | Create a customer address         |
| [**update**](#update) | Update a customer address         |
| [**delete**](#delete) | Delete a customer address         |

## list

> list(customerId: string, params?: AddressListRequest): Promise<Address[]>

List all addresses for a customer

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List addresses for a customer with pagination
wiz.customer.address
  .list("cust_123456789", {
    page: 1,
    page_size: 20,
    sortBy: "created_at",
    sort: "desc",
    status: "active",
  })
  .then((addresses) => {
    console.log(`Found ${addresses.length} addresses`);
    console.log(addresses);
  })
  .catch((error) => {
    console.error("Error listing addresses:", error);
  });
```

### Parameters

| Name             | Type         | Description                                     | Required |
| ---------------- | ------------ | ----------------------------------------------- | -------- |
| **customerId**   | **string**   | Customer ID                                     | Yes      |
| **page**         | **number**   | Page number for pagination                      | No       |
| **page_size**    | **number**   | Number of items per page                        | No       |
| **sortBy**       | **string**   | Field to sort by ("created_at" or "updated_at") | No       |
| **sort**         | **string**   | Sort direction ("asc" or "desc")                | No       |
| **status**       | **string**   | Filter by status ("active" or "inactive")       | No       |
| **referenceIds** | **string[]** | Filter by reference IDs                         | No       |

### Response

```json
[
  {
    "id": "addr_123456",
    "customerId": "cust_123456789",
    "referenceId": "ADDR001",
    "addressLine1": "123 Main St",
    "addressLine2": "Suite 100",
    "city": "San Francisco",
    "state": "CA",
    "country": "USA",
    "zipCode": "94105",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "email": "john.doe@acme.com",
    "type": "billing",
    "status": "active",
    "isDefault": true,
    "attributes": [],
    "createdAt": "2023-01-15T10:30:00Z",
    "updatedAt": "2023-01-16T14:20:00Z"
  }
  // ... more addresses
]
```

## get

> get(customerId: string, addressId: string): Promise<Address>

Get a specific address

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Get a specific address
wiz.customer.address
  .get("cust_123456789", "addr_123456")
  .then((address) => {
    console.log("Address details:", address);
  })
  .catch((error) => {
    console.error("Error fetching address:", error);
  });
```

### Parameters

| Name           | Type       | Description | Required |
| -------------- | ---------- | ----------- | -------- |
| **customerId** | **string** | Customer ID | Yes      |
| **addressId**  | **string** | Address ID  | Yes      |

### Response

```json
{
  "id": "addr_123456",
  "customerId": "cust_123456789",
  "referenceId": "ADDR001",
  "addressLine1": "123 Main St",
  "addressLine2": "Suite 100",
  "city": "San Francisco",
  "state": "CA",
  "country": "USA",
  "zipCode": "94105",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "email": "john.doe@acme.com",
  "type": "billing",
  "status": "active",
  "isDefault": true,
  "attributes": [],
  "createdAt": "2023-01-15T10:30:00Z",
  "updatedAt": "2023-01-16T14:20:00Z"
}
```

## create

> create(customerId: string, data: AddressCreateRequest): Promise<Address>

Create a new address for a customer

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Create a new address
const addressData = {
  referenceId: "ADDR002",
  addressLine1: "456 Market St",
  addressLine2: "Floor 3",
  city: "San Francisco",
  state: "CA",
  country: "USA",
  zipCode: "94105",
  firstName: "Jane",
  lastName: "Smith",
  phone: "+1987654321",
  email: "jane.smith@acme.com",
  type: "shipping",
  isDefault: false,
};

wiz.customer.address
  .create("cust_123456789", addressData)
  .then((newAddress) => {
    console.log("Address created:", newAddress);
  })
  .catch((error) => {
    console.error("Error creating address:", error);
  });
```

### Parameters

| Name           | Type                     | Description  | Required |
| -------------- | ------------------------ | ------------ | -------- |
| **customerId** | **string**               | Customer ID  | Yes      |
| **data**       | **AddressCreateRequest** | Address data | Yes      |

#### AddressCreateRequest

| Name             | Type                        | Description                         | Required |
| ---------------- | --------------------------- | ----------------------------------- | -------- |
| **referenceId**  | **string**                  | Unique reference ID                 | Yes      |
| **firstName**    | **string**                  | First name                          | No       |
| **lastName**     | **string**                  | Last name                           | No       |
| **phone**        | **string**                  | Phone number                        | No       |
| **email**        | **string**                  | Email address                       | No       |
| **addressLine1** | **string**                  | Address line 1                      | Yes      |
| **addressLine2** | **string**                  | Address line 2                      | No       |
| **city**         | **string**                  | City                                | Yes      |
| **state**        | **string**                  | State or province                   | No       |
| **country**      | **string**                  | Country                             | No       |
| **zipCode**      | **string**                  | ZIP or postal code                  | No       |
| **type**         | **"billing" \| "shipping"** | Address type                        | Yes      |
| **isDefault**    | **boolean**                 | Whether this is the default address | No       |
| **attributes**   | **any[]**                   | Address attributes                  | No       |

### Response

Returns an [Address](#get) object on success.

## update

> update(customerId: string, addressId: string, data: AddressUpdateRequest): Promise<Address>

Update an existing address

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update an existing address
const addressUpdates = {
  addressLine1: "789 New Street",
  city: "Oakland",
  isDefault: true,
};

wiz.customer.address
  .update("cust_123456789", "addr_123456", addressUpdates)
  .then((updatedAddress) => {
    console.log("Address updated:", updatedAddress);
  })
  .catch((error) => {
    console.error("Error updating address:", error);
  });
```

### Parameters

| Name           | Type                     | Description         | Required |
| -------------- | ------------------------ | ------------------- | -------- |
| **customerId** | **string**               | Customer ID         | Yes      |
| **addressId**  | **string**               | Address ID          | Yes      |
| **data**       | **AddressUpdateRequest** | Address update data | Yes      |

#### AddressUpdateRequest

| Name             | Type                        | Description                         | Required |
| ---------------- | --------------------------- | ----------------------------------- | -------- |
| **referenceId**  | **string**                  | Unique reference ID                 | No       |
| **firstName**    | **string**                  | First name                          | No       |
| **lastName**     | **string**                  | Last name                           | No       |
| **phone**        | **string**                  | Phone number                        | No       |
| **email**        | **string**                  | Email address                       | No       |
| **addressLine1** | **string**                  | Address line 1                      | No       |
| **addressLine2** | **string**                  | Address line 2                      | No       |
| **city**         | **string**                  | City                                | No       |
| **state**        | **string**                  | State or province                   | No       |
| **country**      | **string**                  | Country                             | No       |
| **zipCode**      | **string**                  | ZIP or postal code                  | No       |
| **type**         | **"billing" \| "shipping"** | Address type                        | No       |
| **isDefault**    | **boolean**                 | Whether this is the default address | No       |
| **attributes**   | **any[]**                   | Address attributes                  | No       |

### Response

Returns an [Address](#get) object on success.

## delete

> delete(customerId: string, addressId: string): Promise<void>

Delete an address

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Delete an address
wiz.customer.address
  .delete("cust_123456789", "addr_123456")
  .then(() => {
    console.log("Address deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting address:", error);
  });
```

### Parameters

| Name           | Type       | Description | Required |
| -------------- | ---------- | ----------- | -------- |
| **customerId** | **string** | Customer ID | Yes      |
| **addressId**  | **string** | Address ID  | Yes      |

### Response

No content returned on success.

# Customer Contact

This module provides methods to work with customer contact resources in the WizCommerce API.

| Method                | Description                      |
| --------------------- | -------------------------------- |
| [**list**](#list)     | List all contacts for a customer |
| [**get**](#get)       | Get a specific contact           |
| [**create**](#create) | Create a customer contact        |
| [**update**](#update) | Update a customer contact        |
| [**delete**](#delete) | Delete a customer contact        |

## list

> list(customerId: string, params?: ContactListRequest): Promise<Contact[]>

List all contacts for a customer

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List contacts for a customer with pagination
wiz.customer.contact
  .list("cust_123456789", {
    page: 1,
    page_size: 20,
    sortBy: "created_at",
    sort: "desc",
    status: "active",
  })
  .then((contacts) => {
    console.log(`Found ${contacts.length} contacts`);
    console.log(contacts);
  })
  .catch((error) => {
    console.error("Error listing contacts:", error);
  });
```

### Parameters

| Name           | Type       | Description                                     | Required |
| -------------- | ---------- | ----------------------------------------------- | -------- |
| **customerId** | **string** | Customer ID                                     | Yes      |
| **page**       | **number** | Page number for pagination                      | No       |
| **page_size**  | **number** | Number of items per page                        | No       |
| **sortBy**     | **string** | Field to sort by ("created_at" or "updated_at") | No       |
| **sort**       | **string** | Sort direction ("asc" or "desc")                | No       |
| **status**     | **string** | Filter by status ("active" or "inactive")       | No       |

### Response

```json
[
  {
    "id": "cont_123456",
    "referenceId": "CONT001",
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane.smith@acme.com",
    "phone": "+1987654321",
    "designation": "Purchasing Manager",
    "status": "active",
    "isDefault": true,
    "attributes": [],
    "createdAt": "2023-01-15T10:30:00Z",
    "updatedAt": "2023-01-16T14:20:00Z"
  }
  // ... more contacts
]
```

## get

> get(customerId: string, contactId: string): Promise<Contact>

Get a specific contact

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Get a specific contact
wiz.customer.contact
  .get("cust_123456789", "cont_123456")
  .then((contact) => {
    console.log("Contact details:", contact);
  })
  .catch((error) => {
    console.error("Error fetching contact:", error);
  });
```

### Parameters

| Name           | Type       | Description | Required |
| -------------- | ---------- | ----------- | -------- |
| **customerId** | **string** | Customer ID | Yes      |
| **contactId**  | **string** | Contact ID  | Yes      |

### Response

```json
{
  "id": "cont_123456",
  "referenceId": "CONT001",
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@acme.com",
  "phone": "+1987654321",
  "designation": "Purchasing Manager",
  "status": "active",
  "isDefault": true,
  "attributes": [],
  "createdAt": "2023-01-15T10:30:00Z",
  "updatedAt": "2023-01-16T14:20:00Z"
}
```

## create

> create(customerId: string, data: ContactCreateRequest): Promise<Contact>

Create a new contact for a customer

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Create a new contact
const contactData = {
  referenceId: "CONT002",
  firstName: "Michael",
  lastName: "Johnson",
  email: "michael.johnson@acme.com",
  phone: "+1765432109",
  designation: "IT Manager",
  isDefault: false,
};

wiz.customer.contact
  .create("cust_123456789", contactData)
  .then((newContact) => {
    console.log("Contact created:", newContact);
  })
  .catch((error) => {
    console.error("Error creating contact:", error);
  });
```

### Parameters

| Name           | Type                     | Description  | Required |
| -------------- | ------------------------ | ------------ | -------- |
| **customerId** | **string**               | Customer ID  | Yes      |
| **data**       | **ContactCreateRequest** | Contact data | Yes      |

#### ContactCreateRequest

| Name            | Type        | Description                         | Required |
| --------------- | ----------- | ----------------------------------- | -------- |
| **referenceId** | **string**  | Unique reference ID                 | Yes      |
| **firstName**   | **string**  | First name                          | Yes      |
| **lastName**    | **string**  | Last name                           | No       |
| **email**       | **string**  | Email address                       | Yes      |
| **phone**       | **string**  | Phone number                        | No       |
| **designation** | **string**  | Job title or designation            | No       |
| **isDefault**   | **boolean** | Whether this is the default contact | No       |
| **attributes**  | **any[]**   | Contact attributes                  | No       |

### Response

Returns a [Contact](#get) object on success.

## update

> update(customerId: string, contactId: string, data: ContactUpdateRequest): Promise<Contact>

Update an existing contact

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update an existing contact
const contactUpdates = {
  designation: "Senior Purchasing Manager",
  phone: "+1876543210",
  isDefault: true,
};

wiz.customer.contact
  .update("cust_123456789", "cont_123456", contactUpdates)
  .then((updatedContact) => {
    console.log("Contact updated:", updatedContact);
  })
  .catch((error) => {
    console.error("Error updating contact:", error);
  });
```

### Parameters

| Name           | Type                     | Description         | Required |
| -------------- | ------------------------ | ------------------- | -------- |
| **customerId** | **string**               | Customer ID         | Yes      |
| **contactId**  | **string**               | Contact ID          | Yes      |
| **data**       | **ContactUpdateRequest** | Contact update data | Yes      |

#### ContactUpdateRequest

| Name            | Type        | Description                         | Required |
| --------------- | ----------- | ----------------------------------- | -------- |
| **referenceId** | **string**  | Unique reference ID                 | No       |
| **firstName**   | **string**  | First name                          | No       |
| **lastName**    | **string**  | Last name                           | No       |
| **email**       | **string**  | Email address                       | No       |
| **phone**       | **string**  | Phone number                        | No       |
| **designation** | **string**  | Job title or designation            | No       |
| **isDefault**   | **boolean** | Whether this is the default contact | No       |
| **attributes**  | **any[]**   | Contact attributes                  | No       |

### Response

Returns a [Contact](#get) object on success.

## delete

> delete(customerId: string, contactId: string): Promise<void>

Delete a contact

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Delete a contact
wiz.customer.contact
  .delete("cust_123456789", "cont_123456")
  .then(() => {
    console.log("Contact deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting contact:", error);
  });
```

### Parameters

| Name           | Type       | Description | Required |
| -------------- | ---------- | ----------- | -------- |
| **customerId** | **string** | Customer ID | Yes      |
| **contactId**  | **string** | Contact ID  | Yes      |

### Response

No content returned on success.

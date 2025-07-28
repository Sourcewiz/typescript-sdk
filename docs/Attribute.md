# Attribute

This module provides methods to work with attribute resources in the WizCommerce API.

| Method            | Description         |
| ----------------- | ------------------- |
| [**list**](#list) | List all attributes |

## list

> list(params: AttributeRequest): Promise<AttributeResponse[]>

List all attributes for a specific entity type

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List customer attributes with pagination
wiz.attribute
  .list({
    entity: "customer",
    page: 1,
    page_size: 20,
  })
  .then((attributes) => {
    console.log(`Found ${attributes.length} attributes`);
    console.log(attributes);
  })
  .catch((error) => {
    console.error("Error listing attributes:", error);
  });
```

### Parameters

| Name          | Type       | Description                                                        | Required |
| ------------- | ---------- | ------------------------------------------------------------------ | -------- |
| **entity**    | **string** | Entity type ('customer', 'address', 'contact', 'order', 'product') | Yes      |
| **page**      | **number** | Page number for pagination                                         | No       |
| **page_size** | **number** | Number of items per page                                           | No       |

### Response

```json
[
  {
    "id": "attr_123456",
    "name": "Industry",
    "entity": "customer",
    "data_type": "select",
    "options": [
      "Technology",
      "Healthcare",
      "Retail",
      "Manufacturing",
      "Financial Services"
    ],
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  },
  {
    "id": "attr_234567",
    "name": "Annual Revenue",
    "entity": "customer",
    "data_type": "number",
    "options": [],
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  },
  {
    "id": "attr_345678",
    "name": "Customer Since",
    "entity": "customer",
    "data_type": "date",
    "options": [],
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  }
]
```

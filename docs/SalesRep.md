# Sales Rep (User)

This module provides methods to work with sales rep (user) resources in the WizCommerce API.

| Method            | Description         |
| ----------------- | ------------------- |
| [**list**](#list) | List all sales reps |

## list

> list(params?: SalesRepListRequest): Promise<SalesRepResponse[]>

List all sales representatives

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List sales reps with pagination
wiz.salesrep
  .list({
    page: 1,
    page_size: 20,
  })
  .then((salesReps) => {
    console.log(`Found ${salesReps.length} sales reps`);
    console.log(salesReps);
  })
  .catch((error) => {
    console.error("Error listing sales reps:", error);
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
    "id": "rep_123456",
    "email": "john.doe@company.com",
    "first_name": "John",
    "last_name": "Doe",
    "full_name": "John Doe",
    "status": "active",
    "role": "sales_rep",
    "phone": "+1234567890",
    "profile_image": "https://example.com/profile/john.jpg",
    "department": "Sales",
    "territories": ["West", "Midwest"],
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-16T14:20:00Z"
  },
  {
    "id": "rep_234567",
    "email": "jane.smith@company.com",
    "first_name": "Jane",
    "last_name": "Smith",
    "full_name": "Jane Smith",
    "status": "active",
    "role": "sales_manager",
    "phone": "+1987654321",
    "profile_image": "https://example.com/profile/jane.jpg",
    "department": "Sales",
    "territories": ["East", "South"],
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-16T14:20:00Z"
  }
  // ... more sales reps
]
```

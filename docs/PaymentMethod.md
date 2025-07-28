# Payment Method

This module provides methods to work with payment method resources in the WizCommerce API.

| Method                | Description              |
| --------------------- | ------------------------ |
| [**list**](#list)     | List all payment methods |
| [**create**](#create) | Create a payment method  |
| [**delete**](#delete) | Delete a payment method  |

## list

> list(params?: PaymentMethodRequest): Promise<PaymentMethodResponse[]>

List all payment methods

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List payment methods with pagination
wiz.paymentmethod
  .list({
    page: 1,
    page_size: 20,
  })
  .then((paymentMethods) => {
    console.log(`Found ${paymentMethods.length} payment methods`);
    console.log(paymentMethods);
  })
  .catch((error) => {
    console.error("Error listing payment methods:", error);
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
    "id": "pm_123456",
    "name": "Credit Card",
    "code": "credit_card",
    "description": "Pay with credit or debit card",
    "is_active": true,
    "supported_currencies": ["USD", "EUR", "GBP"],
    "payment_processor": "stripe",
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  },
  {
    "id": "pm_234567",
    "name": "PayPal",
    "code": "paypal",
    "description": "Pay with PayPal",
    "is_active": true,
    "supported_currencies": ["USD", "EUR", "GBP", "CAD"],
    "payment_processor": "paypal",
    "created_at": "2023-01-15T10:30:00Z",
    "updated_at": "2023-01-15T10:30:00Z"
  }
  // ... more payment methods
]
```

## create

> create(data: PaymentMethodCreateRequest): Promise<PaymentMethodResponse>

Create a new payment method

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Create a new payment method
const paymentMethodData = {
  name: "Bank Transfer",
  code: "bank_transfer",
  description: "Pay by direct bank transfer",
  is_active: true,
  supported_currencies: ["USD", "EUR"],
  payment_processor: "manual",
  settings: {
    bank_name: "First National Bank",
    account_name: "Acme Inc",
    account_number: "123456789",
    routing_number: "987654321",
    instructions: "Please include your order number in the payment reference",
  },
};

wiz.paymentmethod
  .create(paymentMethodData)
  .then((newPaymentMethod) => {
    console.log("Payment method created:", newPaymentMethod);
  })
  .catch((error) => {
    console.error("Error creating payment method:", error);
  });
```

### Parameters

| Name     | Type                           | Description         | Required |
| -------- | ------------------------------ | ------------------- | -------- |
| **data** | **PaymentMethodCreateRequest** | Payment method data | Yes      |

#### PaymentMethodCreateRequest

| Name                     | Type         | Description                  | Required |
| ------------------------ | ------------ | ---------------------------- | -------- |
| **name**                 | **string**   | Payment method name          | Yes      |
| **code**                 | **string**   | Unique code identifier       | Yes      |
| **description**          | **string**   | Description                  | No       |
| **is_active**            | **boolean**  | Whether the method is active | Yes      |
| **supported_currencies** | **string[]** | List of supported currencies | Yes      |
| **payment_processor**    | **string**   | Payment processor name       | Yes      |
| **settings**             | **object**   | Payment method settings      | No       |

### Response

Returns a [PaymentMethodResponse](#list-response) object on success.

## delete

> delete(id: string): Promise<void>

Delete a payment method

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Delete a payment method
wiz.paymentmethod
  .delete("pm_123456")
  .then(() => {
    console.log("Payment method deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting payment method:", error);
  });
```

### Parameters

| Name   | Type       | Description       | Required |
| ------ | ---------- | ----------------- | -------- |
| **id** | **string** | Payment method ID | Yes      |

### Response

No content returned on success.

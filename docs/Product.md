# Product

This module provides methods to work with product resources in the WizCommerce API.

| Method                | Description            |
| --------------------- | ---------------------- |
| [**list**](#list)     | List all products      |
| [**get**](#get)       | Get a specific product |
| [**create**](#create) | Create a product       |
| [**update**](#update) | Update a product       |
| [**delete**](#delete) | Delete a product       |

## list

> list(params?: ProductListRequest): Promise<ProductListResponse[]>

List all products

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// List products with pagination
wiz.product
  .list({
    page: 1,
    page_size: 20,
    sortBy: "created_at",
    sort: "desc",
    status: "active",
  })
  .then((products) => {
    console.log(`Found ${products.length} products`);
    console.log(products);
  })
  .catch((error) => {
    console.error("Error listing products:", error);
  });
```

### Parameters

| Name          | Type       | Description                | Required |
| ------------- | ---------- | -------------------------- | -------- |
| **page**      | **number** | Page number for pagination | No       |
| **page_size** | **number** | Number of items per page   | No       |
| **sortBy**    | **string** | Field to sort by           | No       |
| **sort**      | **string** | Sort direction (asc/desc)  | No       |
| **status**    | **string** | Filter by status           | No       |
| **sku**       | **string** | Filter by SKU              | No       |
| **category**  | **string** | Filter by category         | No       |

### Response

```json
[
  {
    "id": "prod_123456",
    "sku": "WIDGET-PRO",
    "name": "Widget Pro",
    "description": "Professional grade widget",
    "status": "active",
    "price": 49.99,
    "list_price": 59.99,
    "category": "Widgets",
    "images": [
      {
        "url": "https://example.com/images/widget-pro.jpg",
        "is_primary": true
      }
    ],
    "createdAt": "2023-01-15T10:30:00Z",
    "updatedAt": "2023-01-16T14:20:00Z"
  }
  // ... more products
]
```

## get

> get(id: string): Promise<ProductDetailsResponse>

Get a specific product

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Get a specific product
wiz.product
  .get("prod_123456")
  .then((product) => {
    console.log("Product details:", product);
  })
  .catch((error) => {
    console.error("Error fetching product:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Product ID  | Yes      |

### Response

```json
{
  "id": "prod_123456",
  "sku": "WIDGET-PRO",
  "name": "Widget Pro",
  "description": "Professional grade widget with advanced features",
  "short_description": "Pro-grade widget",
  "status": "active",
  "price": 49.99,
  "list_price": 59.99,
  "cost_price": 25.0,
  "category": "Widgets",
  "subcategory": "Professional",
  "brand": "WidgetCo",
  "weight": 1.5,
  "weight_unit": "kg",
  "dimensions": {
    "length": 10,
    "width": 5,
    "height": 2,
    "unit": "cm"
  },
  "inventory": {
    "available_quantity": 100,
    "reserved_quantity": 5,
    "in_stock_quantity": 105
  },
  "images": [
    {
      "id": "img_123456",
      "url": "https://example.com/images/widget-pro-main.jpg",
      "is_primary": true,
      "alt_text": "Widget Pro - Main View"
    },
    {
      "id": "img_234567",
      "url": "https://example.com/images/widget-pro-side.jpg",
      "is_primary": false,
      "alt_text": "Widget Pro - Side View"
    }
  ],
  "variants": [
    {
      "id": "var_123456",
      "sku": "WIDGET-PRO-RED",
      "name": "Widget Pro - Red",
      "price": 49.99,
      "attributes": [
        {
          "name": "Color",
          "value": "Red"
        }
      ]
    },
    {
      "id": "var_234567",
      "sku": "WIDGET-PRO-BLUE",
      "name": "Widget Pro - Blue",
      "price": 49.99,
      "attributes": [
        {
          "name": "Color",
          "value": "Blue"
        }
      ]
    }
  ],
  "attributes": [
    {
      "id": "attr_123456",
      "name": "Material",
      "value": "Aluminum"
    },
    {
      "id": "attr_234567",
      "name": "Warranty",
      "value": "2 Years"
    }
  ],
  "tags": ["featured", "bestseller"],
  "createdAt": "2023-01-15T10:30:00Z",
  "updatedAt": "2023-01-16T14:20:00Z"
}
```

## create

> create(data: ProductCreateRequest): Promise<ProductDetailsResponse>

Create a new product

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Create a new product
const productData = {
  sku: "WIDGET-ULTRA",
  name: "Widget Ultra",
  description: "Ultra powerful widget for professionals",
  short_description: "Ultra-grade widget",
  status: "active",
  price: 99.99,
  list_price: 119.99,
  cost_price: 45.0,
  category: "Widgets",
  subcategory: "Professional",
  brand: "WidgetCo",
  weight: 2.0,
  weight_unit: "kg",
  dimensions: {
    length: 12,
    width: 6,
    height: 3,
    unit: "cm",
  },
  images: [
    {
      url: "https://example.com/images/widget-ultra-main.jpg",
      is_primary: true,
      alt_text: "Widget Ultra - Main View",
    },
  ],
  attributes: [
    {
      name: "Material",
      value: "Carbon Fiber",
    },
    {
      name: "Warranty",
      value: "5 Years",
    },
  ],
  tags: ["new", "premium"],
};

wiz.product
  .create(productData)
  .then((newProduct) => {
    console.log("Product created:", newProduct);
  })
  .catch((error) => {
    console.error("Error creating product:", error);
  });
```

### Parameters

| Name     | Type                     | Description  | Required |
| -------- | ------------------------ | ------------ | -------- |
| **data** | **ProductCreateRequest** | Product data | Yes      |

#### ProductCreateRequest

| Name                  | Type               | Description                  | Required |
| --------------------- | ------------------ | ---------------------------- | -------- |
| **sku**               | **string**         | Stock Keeping Unit           | Yes      |
| **name**              | **string**         | Product name                 | Yes      |
| **description**       | **string**         | Detailed product description | No       |
| **short_description** | **string**         | Short product description    | No       |
| **status**            | **string**         | Product status               | No       |
| **price**             | **number**         | Product price                | Yes      |
| **list_price**        | **number**         | List/retail price            | No       |
| **cost_price**        | **number**         | Cost price                   | No       |
| **category**          | **string**         | Product category             | No       |
| **subcategory**       | **string**         | Product subcategory          | No       |
| **brand**             | **string**         | Product brand                | No       |
| **weight**            | **number**         | Product weight               | No       |
| **weight_unit**       | **string**         | Weight unit                  | No       |
| **dimensions**        | **object**         | Product dimensions           | No       |
| **images**            | **ImageRequest[]** | Product images               | No       |
| **attributes**        | **any[]**          | Product attributes           | No       |
| **tags**              | **string[]**       | Product tags                 | No       |

### Response

Returns a [ProductDetailsResponse](#get) object on success.

## update

> update(id: string, data: ProductUpdateRequest): Promise<ProductDetailsResponse>

Update an existing product

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Update an existing product
const productUpdates = {
  name: "Widget Ultra Plus",
  price: 109.99,
  attributes: [
    {
      name: "Material",
      value: "Titanium Alloy",
    },
  ],
};

wiz.product
  .update("prod_123456", productUpdates)
  .then((updatedProduct) => {
    console.log("Product updated:", updatedProduct);
  })
  .catch((error) => {
    console.error("Error updating product:", error);
  });
```

### Parameters

| Name     | Type                     | Description         | Required |
| -------- | ------------------------ | ------------------- | -------- |
| **id**   | **string**               | Product ID          | Yes      |
| **data** | **ProductUpdateRequest** | Product update data | Yes      |

#### ProductUpdateRequest

| Name                  | Type               | Description                  | Required |
| --------------------- | ------------------ | ---------------------------- | -------- |
| **sku**               | **string**         | Stock Keeping Unit           | No       |
| **name**              | **string**         | Product name                 | No       |
| **description**       | **string**         | Detailed product description | No       |
| **short_description** | **string**         | Short product description    | No       |
| **status**            | **string**         | Product status               | No       |
| **price**             | **number**         | Product price                | No       |
| **list_price**        | **number**         | List/retail price            | No       |
| **cost_price**        | **number**         | Cost price                   | No       |
| **category**          | **string**         | Product category             | No       |
| **subcategory**       | **string**         | Product subcategory          | No       |
| **brand**             | **string**         | Product brand                | No       |
| **weight**            | **number**         | Product weight               | No       |
| **weight_unit**       | **string**         | Weight unit                  | No       |
| **dimensions**        | **object**         | Product dimensions           | No       |
| **images**            | **ImageRequest[]** | Product images               | No       |
| **attributes**        | **any[]**          | Product attributes           | No       |
| **tags**              | **string[]**       | Product tags                 | No       |

### Response

Returns a [ProductDetailsResponse](#get) object on success.

## delete

> delete(id: string): Promise<void>

Delete a product

### Example

```typescript
import { WizCommerce } from "wizcommerce";

const wiz = new WizCommerce(WizCommerce.PRODUCTION, "<API_KEY>");

// Delete a product
wiz.product
  .delete("prod_123456")
  .then(() => {
    console.log("Product deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting product:", error);
  });
```

### Parameters

| Name   | Type       | Description | Required |
| ------ | ---------- | ----------- | -------- |
| **id** | **string** | Product ID  | Yes      |

### Response

No content returned on success.

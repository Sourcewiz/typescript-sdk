export const URL = {
  local: {
    V1: "http://localhost:8080/v1",
    V2: "http://localhost:8080/v2",
  },
  staging: {
    V1: "https://api-staging.sourcerer.tech/v1",
    V2: "https://api-staging.sourcerer.tech/v2",
  },
  production: {
    V1: "https://api.wizcommerce.com/v1",
    V2: "https://api.wizcommerce.com/v2",
  },
} as const;
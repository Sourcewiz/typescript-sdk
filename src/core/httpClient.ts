export class HttpClient {
  constructor(
    private apiKey: string,
    private baseURL: string = "http://localhost:8080/v1"
  ) {}

  private buildHeaders(): Headers {
    return new Headers({
      "X-API-Key": this.apiKey,
      "Content-Type": "application/json",
    });
  }

  async get<T>(
    path: string,
    queryParams: Record<string, any> = {}
  ): Promise<T> {
    const query = new URLSearchParams(queryParams).toString();
    try {
      const res = await fetch(`${this.baseURL}${path}?${query}`, {
        method: "GET",
        headers: this.buildHeaders(),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`GET ${path} failed: ${res.status} ${text}`);
      }
      return res.json();
    } catch (err) {
      throw err;
    }
  }

  async post<T>(path: string, body: any): Promise<T> {
    try {
      const res = await fetch(`${this.baseURL}${path}`, {
        method: "POST",
        headers: this.buildHeaders(),
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`POST ${path} failed: ${res.status} ${text}`);
      }
      return res.json();
    } catch (err) {
      throw err;
    }
  }

  async put<T>(path: string, body: any): Promise<T> {
    try {
      const res = await fetch(`${this.baseURL}${path}`, {
        method: "PUT",
        headers: this.buildHeaders(),
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`PUT ${path} failed: ${res.status} ${text}`);
      }
      return res.json();
    } catch (err) {
      throw err;
    }
  }

  async patch<T>(path: string, body: any): Promise<T> {
    try {
      const res = await fetch(`${this.baseURL}${path}`, {
        method: "PATCH",
        headers: this.buildHeaders(),
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`PATCH ${path} failed: ${res.status} ${text}`);
      }
      return res.json();
    } catch (err) {
      throw err;
    }
  }

  async delete(path: string): Promise<void> {
    try {
      const res = await fetch(`${this.baseURL}${path}`, {
        method: "DELETE",
        headers: this.buildHeaders(),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`DELETE ${path} failed: ${res.status} ${text}`);
      }
    } catch (err) {
      throw err;
    }
  }
}

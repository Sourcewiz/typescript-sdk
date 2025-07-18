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
    const res = await fetch(`${this.baseURL}${path}?${query}`, {
      method: "GET",
      headers: this.buildHeaders(),
    });
    return res.json();
  }

  async post<T>(path: string, body: any): Promise<T> {
    const res = await fetch(`${this.baseURL}${path}`, {
      method: "POST",
      headers: this.buildHeaders(),
      body: JSON.stringify(body),
    });
    return res.json();
  }

  async put<T>(path: string, body: any): Promise<T> {
    const res = await fetch(`${this.baseURL}${path}`, {
      method: "PUT",
      headers: this.buildHeaders(),
      body: JSON.stringify(body),
    });
    return res.json();
  }

  async patch<T>(path: string, body: any): Promise<T> {
    const res = await fetch(`${this.baseURL}${path}`, {
      method: "PATCH",
      headers: this.buildHeaders(),
      body: JSON.stringify(body),
    });
    return res.json();
  }

  async delete(path: string): Promise<void> {
    await fetch(`${this.baseURL}${path}`, {
      method: "DELETE",
      headers: this.buildHeaders(),
    });
  }
}

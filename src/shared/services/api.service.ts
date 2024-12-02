import type { HttpClient } from '../entities/http.entity'

export class ApiService {
  constructor(private httpClient: HttpClient) {}

  async getData<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    return this.httpClient.get<T>(url, params)
  }

  async postData<T, U>(url: string, data: U): Promise<T> {
    return this.httpClient.post<T, U>(url, data)
  }

  async putData<T, U>(url: string, data: U): Promise<T> {
    return this.httpClient.put<T, U>(url, data)
  }

  async deleteData<T>(url: string): Promise<T> {
    return this.httpClient.delete<T>(url)
  }
}

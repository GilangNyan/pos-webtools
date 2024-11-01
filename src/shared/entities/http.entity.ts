export interface HttpClient {
  get<T>(url: string, params?: Record<string, unknown>): Promise<T>
  post<T, U>(url: string, data?: U): Promise<T>
  put<T, U>(url: string, data?: U): Promise<T>
  delete<T>(url: string): Promise<T>
}

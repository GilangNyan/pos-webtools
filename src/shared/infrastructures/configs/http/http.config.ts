import type { HttpClient } from '@/shared/entities/http.entity'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

export class HttpConfig implements HttpClient {
  private client: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    const defaultConfig: AxiosRequestConfig = {
      baseURL: import.meta.env.VITE_API_ENDPOINT,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    this.client = axios.create({
      ...defaultConfig,
      ...config,
    })
  }

  private handleResponse<T>(response: AxiosResponse): T {
    return response.data
  }

  private handleError(error: unknown): never {
    throw new Error((error as string) || 'An unknown error occured')
  }

  async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    try {
      const response = await this.client.get<T>(url, { params })
      return this.handleResponse<T>(response)
    } catch (error) {
      this.handleError(error)
    }
  }

  async post<T, U>(url: string, data?: U): Promise<T> {
    try {
      const response = await this.client.post<T>(url, data)
      return this.handleResponse<T>(response)
    } catch (error) {
      this.handleError(error)
    }
  }

  async put<T, U>(url: string, data?: U): Promise<T> {
    try {
      const response = await this.client.put<T>(url, data)
      return this.handleResponse<T>(response)
    } catch (error) {
      this.handleError(error)
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response = await this.client.delete<T>(url)
      return this.handleResponse<T>(response)
    } catch (error) {
      this.handleError(error)
    }
  }
}

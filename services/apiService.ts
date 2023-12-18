import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });


  }

  public async get<T>(resource: string): Promise<T> {
    const response: AxiosResponse<T> = await this.api.get(resource);
    return response.data;
  }

  public post<T>(
    resource: string,
    body: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.api.post(resource, body, config);
  }

  public patch(
    resource: string,
    body: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.api.patch(resource, body, config);
  }

  public put<T>(
    resource: string,
    body: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.api.put(resource, body, config);
  }

  public delete<T>(
    resource: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.api.delete(resource, config);
  }
}

const apiService = new ApiService();

export default apiService;

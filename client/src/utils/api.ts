import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE } from './constants';

export class Api {
    private api: AxiosInstance;

    public constructor (config: AxiosRequestConfig) {
        this.api = axios.create(config);

        this.api.interceptors.request.use((param: AxiosRequestConfig) => {
            const config = {
                ...param,
            baseURL: API_BASE,
            }
            console.log('config', config);

            return {
                ...config
            }
        });
    }

    public getUri (config?: AxiosRequestConfig): string {
        return this.api.getUri(config);
    }

    public request<T, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R> {
        return this.api.request(config);
    }

    public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.get(url, config);
    }

    public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.delete(url, config);
    }

    public head<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.head(url, config);
    }

    public post<T, R = AxiosResponse<T>> (url: string, data?: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.post(url, data, config);
    }

    public put<T, R = AxiosResponse<T>> (url: string, data?: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.put(url, data, config);
    }

    public patch<T, R = AxiosResponse<T>> (url: string, data?: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.patch(url, data, config);
    }
}

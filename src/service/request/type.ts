import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// export interface HYRequestInterceptors<T = AxiosResponse> {
//   requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
//   requestInterceptorCatch?: (error: any) => any
//   responseInterceptor?: (res: T) => T
//   responseInterceptorCatch?: (error: any) => any
// }

// export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
//   interceptors?: HYRequestInterceptors<T>
//   showLoading?: boolean
// }
export interface ERequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  reponseInterceptorCatch?: (error: any) => any
}
export interface ERequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ERequestInterceptors<T>
  showLoading?: boolean
}

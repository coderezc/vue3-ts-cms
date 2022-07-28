import type { AxiosRequestConfig } from 'axios'

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
export interface ERequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  reponseInterceptorCatch?: (error: any) => any
}
export interface ERequestConfig extends AxiosRequestConfig {
  interceptors?: ERequestInterceptors
  showLoading?: boolean
}

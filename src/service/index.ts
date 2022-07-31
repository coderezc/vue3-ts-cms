import ERequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
const eRequest = new ERequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      //携带token的拦截
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    reponseInterceptorCatch: (error) => {
      return error
    }
  }
})
export default eRequest

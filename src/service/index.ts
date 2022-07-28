import ERequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const eRequest = new ERequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      //携带token的拦截
      const token = ''
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求拦截')
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败的拦截')
      return error
    },
    responseInterceptor: (res) => {
      console.log('响应拦截')
      return res
    },
    reponseInterceptorCatch: (error) => {
      console.log('响应失败的拦截')
      return error
    }
  }
})
export default eRequest

import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ERequestInterceptors, ERequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
const DEFAULT_LOADING = true
class ERequest {
  instance: AxiosInstance
  interceptors?: ERequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: ERequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    //某个实例的拦截（本项目只有一个实例，但是这样写具有更高的可拓展性）
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.reponseInterceptorCatch
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的请求拦截器')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载...',
            background: 'rgba(0,0,0,0.5)'
          })
        }

        return config
      },
      (err) => {
        console.log('所有实例都有的请求错误拦截器')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的响应拦截器')
        // 移除loading
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败-错误信息')
          return
        } else {
          return data
        }
      },
      (err) => {
        console.log('所有实例都有的响应失败拦截器')
        if (err.response.status == 404) {
          console.log('404 not found')
        }
        return err
      }
    )
  }
  request<T>(config: ERequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      //某一个请求的拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading && config.showLoading != this.showLoading) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            // res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T>(config: ERequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: ERequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: ERequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}
export default ERequest

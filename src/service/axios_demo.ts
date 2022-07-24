import axios from 'axios'
axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'ezc',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'ezc',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })
//axios基本配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
//axios.all
axios
  .all([
    axios.get('/get', { params: { name: '张三', age: 24 } }),
    axios.post('/post', { data: { name: '李四', age: 100 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })
//axios拦截器
//请求拦截器:axios.interceptors.request.use(fn1,fn2)
//响应拦截器:axios.interceptors.response.use(fn1,fn2)
//fn1：请求发送之前 / 对响应内容 做些什么
//fn2：若请求错误 / 响应错误 做些什么

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import eRequest from './service'
import 'element-plus/dist/index.css'
import './service/axios_demo'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
eRequest
  .request({
    url: 'http://httpbin.org/get',
    method: 'GET'
  })
  .then((res) => console.log('111', res))

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import eRequest from './service'
import 'element-plus/dist/index.css'
import './service/axios_demo'
import 'normalize.css'
import './assets/css/index.less'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

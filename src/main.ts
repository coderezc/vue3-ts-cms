import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './service/axios_demo'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'
const app = createApp(App)
app.use(store)
app.use(ElementPlus)
setupStore()
app.use(router)
app.mount('#app')

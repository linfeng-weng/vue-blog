import 'normalize.css'
import './assets/css/index.css'
import 'element-plus/dist/index.css'
import router from './router'
import pinia from './stores'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router).use(pinia).mount('#app')

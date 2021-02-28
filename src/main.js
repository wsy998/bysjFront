import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/display.css'
import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App)

app.config.globalProperties.isLogin = () => {
  return sessionStorage.getItem('token') !== null
}
app.mount('#app')

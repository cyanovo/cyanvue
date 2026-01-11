import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入axios
import axios from 'axios'

const app = createApp(App)

// 使用element-plus
app.use(ElementPlus)

// 使用路由
app.use(router)

// 可选：将axios挂载到全局属性，这样在组件中可以通过this.$axios访问（选项式API）
// 对于组合式API，可以通过inject访问，但更推荐在需要时直接导入axios。
// 这里我们同时将axios设置为全局属性，以便在选项式API中使用。
app.config.globalProperties.$axios = axios

// 您也可以设置axios的默认配置，例如设置baseURL
// axios.defaults.baseURL = 'https://api.example.com'

app.mount('#app')
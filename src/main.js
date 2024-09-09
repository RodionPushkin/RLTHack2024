import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./api";
import './clear.scss'
import './theme.scss'
import './style.scss'
import mitt from 'mitt';
const emitter = mitt();

const app = createApp(App)
app.config.globalProperties.$api = new api('https://hackers54.ru/api/v1.0/search/')
app.config.globalProperties.$emitter = emitter;
app.use(store).use(router).use(autoAnimatePlugin).mount('#app')

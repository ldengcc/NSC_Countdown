import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

// app.use(createPinia());
// app.use(router); // 啟用 Vue Router
app.mount("#app");
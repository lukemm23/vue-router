import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// no need to put /index at the end of router import since it will automatically find a index file to use
createApp(App).use(router).mount('#app')

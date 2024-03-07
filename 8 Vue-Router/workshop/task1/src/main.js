import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // import the router instance

const app = createApp(App)
app.use(router) // use the router instance as a plugin
app.mount('#app')

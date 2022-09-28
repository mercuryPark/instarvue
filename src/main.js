// import { apply } from 'core-js/fn/reflect'
import { createApp } from 'vue'
import App from './App.vue'
let app = createApp(App)
import store from './store.js'


app.use(store).mount('#app')

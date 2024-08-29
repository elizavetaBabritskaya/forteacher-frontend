import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'


const pinia = createPinia()
const app = createApp(App)

const gAuthOptions = {
  clientId: '178297628735-6agoqtpsa2itg5v54kid1ng3pa3guvsb.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {clientId: '178297628735-6agoqtpsa2itg5v54kid1ng3pa3guvsb.apps.googleusercontent.com'})
app.mount('#app')

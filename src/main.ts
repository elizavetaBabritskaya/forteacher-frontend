import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import vue3GoogleLogin from 'vue3-google-login'

const pinia = createPinia()
const app = createApp(App).use(Quasar, quasarUserOptions)

const gAuthOptions = {
  clientId: '178297628735-6agoqtpsa2itg5v54kid1ng3pa3guvsb.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {clientId: '178297628735-6agoqtpsa2itg5v54kid1ng3pa3guvsb.apps.googleusercontent.com'})
app.mount('#app')

// import './assets/main.css'
import Buefy from 'buefy'

//CSS------
import 'buefy/dist/css/buefy.css'

//ultimo
import '@/assets/css/tema.css'
//---------

//SASS-----
// import '@/assets/scss/tema.scss'
//-------

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(Buefy)
app.use(createPinia())
app.use(router)

app.mount('#app')

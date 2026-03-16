// import './assets/main.css'
import Buefy from 'buefy'
import Oruga from '@oruga-ui/oruga-next'

// import "bulma-list/css/bulma-list.css"

//CSS------
import 'bulma/css/bulma.css'
// import 'buefy/dist/css/buefy.css'
import '@oruga-ui/theme-oruga/style.css'
// import { bulmaConfig } from "@oruga-ui/theme-bulma";
import "@fortawesome/fontawesome-free/css/all.css"
// import '@mdi/font/css/materialdesignicons.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Registre o componente FontAwesomeIcon

//ultimo
// import '@/assets/css/tema.css'
//---------

//SASS-----
// import '@/assets/scss/tema.scss'
//-------

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// const styles = import.meta.glob("./css/*.css", { eager: true })
// Object.values(styles)


library.add(fas);

const app = createApp(App)
app.component("VueFontawesome", FontAwesomeIcon)
app.use(Oruga, {
	// ...bulmaConfig,
	iconPack: 'fas',
	iconComponent: 'vue-fontawesome'
})
// app.use(Oruga)
app.use(Buefy)
app.use(createPinia())
app.use(router)

app.mount('#app')

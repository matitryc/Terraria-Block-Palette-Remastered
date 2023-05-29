import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style/main.scss'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '@/config/firebase.js'
import router from '@/router'
import clickOutsideDirective from '@/plugins/clickOutsideDirective'
import App from './App.vue'
import AppButton from '@/components/AppButton.vue'
import AppLogo from '@/components/AppLogo.vue'
import AppSearch from '@/components/AppSearch.vue'
import AppModal from '@/components/AppModal.vue'
import AppLink from '@/components/AppLink.vue'
import AppSearchResult from '@/components/AppSearchResult.vue'
export const firebase = initializeApp(firebaseConfig)

const pinia = createPinia()
createApp(App)
.use(router)
.use(pinia)
.use(clickOutsideDirective)
.component('AppButton', AppButton)
.component('AppSearchResult', AppSearchResult)
.component('AppLogo', AppLogo)
.component('AppSearch', AppSearch)
.component('AppModal', AppModal)
.component('AppLink', AppLink)
.mount('#app')

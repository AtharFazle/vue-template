import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { useRouter, useRoute } from 'vue-router'
import './styles/index.css'


const router = createRouter({
    history: createWebHistory(),
    routes
})

const routesHelper = useRouter()

createApp(App).

use(router).mount('#app')

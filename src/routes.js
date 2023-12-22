import VueRouter from 'vue-router'
import MainPage from  './pages/MainPage.vue'
import RatesPage from './pages/RatesPage.vue'
import AboutPage from './pages/AboutPage.vue'

export default new VueRouter ({
    routes: [
        {
            path: '*',
            component: MainPage
        },
        {
            path: '*/rates',
            component: RatesPage
        },
        {
            path: '*/about',
            component: AboutPage
        }
        
    ],
    mode: "history"
}) 
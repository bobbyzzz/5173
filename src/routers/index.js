import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import axios from 'axios'
axios.defaults.baseURL = 'http://47.107.225.115:8080/'
Vue.prototype.$axios = axios
import homePage from '../components/homePage.vue'
import timeCard from '../components/timeCard.vue'
import gameLeveling from '../components/gameLeveling.vue'
import gameCurrency from '../components/gameCurrency.vue'
import equip from '../components/equip.vue'
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/gameLeveling'
        },
        {
            path: '/homePage',
            component: homePage
        },
        {
            path: '/timeCard',
            component: timeCard,
        },
        {
            path: '/gameLeveling',
            component: gameLeveling
        },
        {
            path: '/gameCurrency',
            component: gameCurrency
        },
        {
            path: '/equip',
            component: equip
        }
    ]
})
export default router
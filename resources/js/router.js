import Vue from 'vue'
import VueRouter from 'vue-router'

//Page
import Dashboard from './views/Dashboard.vue'
import Register from './views/Register.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: "/dashboard"
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ],
    mode: 'history'
})
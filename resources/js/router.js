import Vue from 'vue'
import VueRouter from 'vue-router'

//Page
import Home from './components/Home.vue'
import ExampleComponent from './components/ExampleComponent.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/example-component',
            component: ExampleComponent,
            name: 'Example Component'
        }
    ],
    mode: 'history'
})
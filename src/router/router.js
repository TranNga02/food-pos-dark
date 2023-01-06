import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../container/HomePage/HomePage.vue'
import MenuContent from '@/container/MenuContent/MenuContent.vue'
Vue.use(Router)

export const router = new Router({
    routes: [
        {
            path: '/home-page', 
            name: 'home-page',
            component: HomePage,
        },
        {
            path:'/menu-content',
            name: 'menu-content',
            component: MenuContent
        }
        
    ]
})
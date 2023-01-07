import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const router = new Router({
    routes: [
        {path:'/menu/:id', name: 'menu', component: ()=>import('@/container/MenuContent/MenuContent.vue')}
    ]
})
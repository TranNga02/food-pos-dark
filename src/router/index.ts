import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const HomePage = () => import('@/pages/HomePage.vue');
const Button = () => import('@/components/Button');
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    children: [
      {
        path: '/discount',
        name: 'Discount',
        component: Button,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

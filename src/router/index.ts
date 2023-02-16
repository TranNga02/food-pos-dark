import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const HomePage = () => import('@/pages/HomePage.vue');
const Home = () => import('@/pages/home/Home.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: HomePage,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
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

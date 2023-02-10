import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const Layout = () => import('@/layout');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue'),
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

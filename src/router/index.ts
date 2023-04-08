import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const HomePage = () => import('@/pages/HomePage.vue');
const Home = () => import('@/pages/Home.vue');
const SignInPage = () => import('@/pages/SignInPage.vue');

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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated: boolean = sessionStorage.getItem('token') ? true : false;

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/sign-in');
  } else {
    next();
  }
});

export default router;

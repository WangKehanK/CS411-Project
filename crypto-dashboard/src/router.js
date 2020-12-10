import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Register from './views/Register'

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/view/:symbol',
      name: 'infoview',
      component: () => import('./views/InfoView.vue'),
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      prop: true,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      props: true
    },
  ]
})
router.beforeEach((to, from, next) => {
  //console.log('BASE ' + process.env.BASE_URL);
  next()
})
export default router;

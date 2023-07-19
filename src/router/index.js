import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Profile from '../views/Profile'

Vue.use(VueRouter)

// export default router
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          meta: {
            permissions: [{ role: 'guest', access: false, redirect: Login }],
          },
        },
        {
          path: '/profile/:id',
          name: 'profile',
          component: Profile,
          meta: {
            permissions: [{ role: 'guest', access: false, redirect: Login }],
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
})

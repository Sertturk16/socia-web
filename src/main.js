import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/index.scss'
import VueRouterUserRoles from 'vue-router-user-roles'

Vue.use(VueRouterUserRoles, { router })

Vue.config.productionTip = false

let authenticate = Promise.resolve({ role: 'guest' })
authenticate.then((user) => {
  console.log(user)
  Vue.prototype.$user.set(user)
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app')
})

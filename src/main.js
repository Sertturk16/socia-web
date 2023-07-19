import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/index.scss'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import VueRouterUserRoles from 'vue-router-user-roles'

Vue.use(VueRouterUserRoles, { router })
Vue.use(Vuetify)

Vue.config.productionTip = false

const vuetify = new Vuetify()
let authenticate = Promise.resolve({ role: 'guest' })
authenticate.then((user) => {
  console.log(user)
  Vue.prototype.$user.set(user)
  new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app')
})

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import { store } from './store/store'
import VueSpinners from 'vue-spinners'
import VeeValidate from 'vee-validate'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VueSpinners)

//define meta properties
const router = new VueRouter({
  routes, 
  mode: 'history' //To get rid of the hash, we can use the router's history mode, 
  //which leverages the history.pushState API to achieve URL navigation without a page reload
})

//to: the target Route Object being navigated to 
//from: the current route being navigated away from
//next: this function must be called to resolve the hook, the action depends on the arguments provided to next
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    //iterate over $route.matched to check for meta fields in route records
    if (!store.getters.loggedIn) {
      next({
        name: 'login',//redirect to a different location
      })
    } else {
      next()//move on to the next hook in the pipeline, if no hooks are left, the navigation is confirmed
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'todo',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')

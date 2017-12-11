import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

import IsNotStartup from './components/IsNotStartup.vue'
import Massnahmen from './components/Massnahmen.vue'
import NewUser from './components/NewUser.vue'

const routes = [
  { path: '/startup-massnahmen', component: Massnahmen },
  { path: '/kein-startup', component: IsNotStartup },
  { path: '/', component: NewUser }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
})

window.onload = function () {
    const massnahmenApp = new Vue({
      router: router,
      render: h => h(App),
      el: ('#massnahmen-app')
    })
}

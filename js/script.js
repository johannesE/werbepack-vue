import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

import IsNotStartup from './components/IsNotStartup.vue'
import Massnahmen from './components/Massnahmen.vue'
import Massnahme from './components/Massnahme.vue'

const routes = [
  {
    path: '/',
    component: Massnahmen,
    name: 'massnahmen',
  },
];

Vue.use(VueRouter);
Vue.filter('format_id', function (value) {
  return (value || value === 0)
    ? value.toString().toLowerCase().replace(/ /g, '')
    : ''
});


const router = new VueRouter({
  routes: routes,
});

window.onload = function () {
  const massnahmenApp = new Vue({
    router: router,
    render: h => h(App),
    el: ('#massnahmen-app')
  })
};

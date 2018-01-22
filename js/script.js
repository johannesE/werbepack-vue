import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

import Massnahmen from './components/Massnahmen.vue'
import VeeValidate, { Validator } from 'vee-validate';
import de from 'vee-validate/dist/locale/de';

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

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('de', de);
Vue.use(VeeValidate, {
  locale: 'de'
});

window.onload = function () {
  const massnahmenApp = new Vue({
    router: router,
    render: h => h(App),
    el: ('#massnahmen-app')
  })
};

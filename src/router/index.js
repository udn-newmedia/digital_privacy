import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/crisis',
      name: 'crisis'
    },
    {
      path: '/self_protection',
      name: 'self_protection'
    }
  ],
})
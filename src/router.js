import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Stats',
      name: 'Stats',
      // route level code-splitting
      // this generates a separate chunk (Stats.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Stats" */ './views/Stats.vue'),
    },
  ],
});

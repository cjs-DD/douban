import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/home',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},
{
  path: '/yingyuan',
  name: 'yingyuan',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/yingyuan.vue')
},
{
  path: '/wode',
  name: 'wode',
  component: () => import(/* webpackChunkName: "about" */ '../views/wode.vue')
},
{
  path: '/daiying',
  name: 'daiying',
  component: () => import(/* webpackChunkName: "about" */ '../views/daiying.vue')
},
{
  path: '/search',
  name: 'search',
  component: () => import(/* webpackChunkName: "about" */ '../views/search.vue')
},
{
  path: '/cinema_details',
  name: 'cinema_details',
  component: () => import(/* webpackChunkName: "about" */ '../views/cinema_details.vue')
},
{
  path: '/detail/:filmId',
  name: 'movie_detail',
  component: () => import(/* webpackChunkName: "about" */ '../views/movie_detail.vue')
},
{
  path: '/want_movie',
  name: 'want_movie',
  component: () => import(/* webpackChunkName: "about" */ '../views/want_movie.vue')
},
{
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
},
{
  path: '*',
  redirect: '/home'
}
]

const router = new VueRouter({
  routes
})

export default router

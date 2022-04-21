import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// bugfix 解决相同路由重复点击 bug
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('@/components/content/home/Home.vue')
const Classify = () => import('@/components/content/classify/Classify.vue')
const Cart = () => import('@/components/content/cart/Cart.vue')
const Profile = () => import('@/components/content/profile/Profile.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

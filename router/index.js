import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  {useAuthStore} from "../stores/authStore.js"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Dashboard/Dashboard.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/myCart',
      name: 'mycart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Cart/MyCart.vue'),
      meta:{
        requiresAuth:true
      }
    }
  ]
})


router.beforeEach((to,from,next) =>{
  const authStore = useAuthStore();
  const apiKey = localStorage.getItem("apiKey");
  if(to.path=== "/" && apiKey) next("/dashboard")
  if(to.path=== "NotFound" && apiKey) next("/dashboard")
  else if(to.meta.requiresAuth && (!apiKey && !authStore.isAuthenticated)) next("/")
  else next();
})

export default router

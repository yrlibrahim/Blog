import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Consulting from '../views/Consulting.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/consulting', name: 'Consulting', component: Consulting },
    { path: '/about', name: 'About', component: About },
    { path: '/blog', name: 'Blog', component: Blog },
  ],
})

export default router

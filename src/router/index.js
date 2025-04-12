import { createRouter, createWebHistory } from 'vue-router'
import Project from '@/components/Project.vue'
import Problem from '@/components/Problem.vue'


const routes = [
  {
    path: '/',
    name: 'project',
    component: Project
  },
  {
    path: '/problem',
    name: 'problem',
    component: Problem
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router;

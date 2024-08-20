import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from '../components/ToDoList.vue'
import TodoDetail from '../components/ToDoDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: ToDoList },
  { path: '/todo/:id', name: 'TodoDetail', component: TodoDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
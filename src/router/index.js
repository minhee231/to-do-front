import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from '../components/ToDoList.vue'
import TodoDetail from '../components/ToDoDetail.vue'
import PostList from '@/components/PostList.vue'
import PostDetail from '@/components/PostDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: ToDoList },
  { path: '/todo/:id', name: 'TodoDetail', component: TodoDetail, props: true },
  { path: '/post', name: 'Post', component: PostList },
  { path: '/post/:id', name: 'PostDetail', component: PostDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
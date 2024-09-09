import { createRouter, createWebHistory } from 'vue-router'
const title = 'hackers54'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'сегментация по закупкам' },
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/2',
    name: 'home2',
    meta: { title: 'сегментация по критериям' },
    component: () => import('../views/home2/index.vue')
  },
  {
    path: '/presentation',
    name: 'presentation',
    meta: { title: 'презентация' },
    component: () => import('../views/presentation/index.vue')
  },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   meta: { title: 'регистрация' },
  //   beforeEnter: authGuard,
  //   component: () => import('../views/signup/index.vue')
  // },
  // {
  //   path: '/signin',
  //   name: 'signin',
  //   meta: { title: 'вход' },
  //   beforeEnter: authGuard,
  //   component: () => import('../views/signin/index.vue')
  // },
  // {
  //   path: '/room/:id',
  //   name: 'room',
  //   meta: { title: 'комната' },
  //   beforeEnter: authGuard,
  //   component: () => import('../views/room/index.vue')
  // },
  { path: '/:pathMatch(.*)*', meta: { title: 'ошибка 404' }, component: () => import('../views/404/index.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeResolve((to, from, next) => {
  document.querySelector("title").textContent = `${title} - ${to.meta.title}`
  next()
})

export default router

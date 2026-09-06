import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'landing', component: () => import('../views/LandingView.vue') },

  { path: '/login', name: 'login', component: () => import('../views/auth/LoginView.vue') },
  { path: '/register', name: 'register', component: () => import('../views/auth/RegisterView.vue') },

  { path: '/feed', name: 'feed', component: () => import('../views/FeedView.vue'), meta: { requiresAuth: true } },
  { path: '/courses/:id', name: 'course-detail', component: () => import('../views/CourseDetailView.vue') },
  { path: '/lessons/:id', name: 'lesson', component: () => import('../views/LessonView.vue'), meta: { requiresAuth: true } },
  { path: '/my-courses', name: 'my-courses', component: () => import('../views/MyCoursesView.vue'), meta: { requiresAuth: true } },
  { path: '/upload', name: 'upload', component: () => import('../views/UploadView.vue'), meta: { requiresAuth: true } },

  { path: '/admin/dashboard', name: 'admin-dashboard', component: () => import('../views/admin/AdminDashboardView.vue'), meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/admin/users', name: 'admin-users', component: () => import('../views/admin/AdminUsersView.vue'), meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/admin/courses', name: 'admin-courses', component: () => import('../views/admin/AdminCoursesView.vue'), meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/admin/categories', name: 'admin-categories', component: () => import('../views/admin/AdminCategoriesView.vue'), meta: { requiresAuth: true, requiresAdmin: true } },

  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

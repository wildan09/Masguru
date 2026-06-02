import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TipsView from '../views/TipsView.vue'
import TipDetailView from '../views/TipDetailView.vue'
import SubmissionView from '../views/SubmissionView.vue'
import ContactView from '../views/ContactView.vue'
import AdminView from '../views/AdminView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { getSession, logout } from '../services/supabase'

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
      component: AboutView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/tips',
      name: 'tips',
      component: TipsView
    },
    {
      path: '/tips/:id',
      name: 'tip-detail',
      component: TipDetailView
    },
    {
      path: '/submission',
      name: 'submission',
      component: SubmissionView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

// Navigation Guard
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if (requiresAuth) {
    // Check inactivity timeout (6 hours = 21600000 ms)
    const lastActivity = localStorage.getItem('last_activity');
    if (lastActivity) {
      const elapsed = Date.now() - parseInt(lastActivity, 10);
      if (elapsed > 6 * 60 * 60 * 1000) {
        await logout();
        alert('Your session has expired due to inactivity (6 hours). Please log in again.');
        next('/login');
        return;
      }
    }

    const session = await getSession();
    if (!session) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router

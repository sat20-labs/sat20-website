import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: HomePage,
    meta: {
      title: 'SAT20 - Open Bitcoin-Native Execution Network'
    }
  },
  { 
    path: '/:pathMatch(.*)*',
    redirect: '/',
    meta: {
      title: 'SAT20 - Open Bitcoin-Native Execution Network'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// 更新页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'SAT20';
  next();
});

export default router;

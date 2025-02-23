import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: HomePage,
    meta: {
      title: 'SAT20 - BTC原生资产发行与流动协议'
    }
  },
  { 
    path: '/tech', 
    name: 'tech',
    component: () => import('@/pages/TechnologyPage.vue'),
    meta: {
      title: '技术 - SAT20'
    }
  },
  { 
    path: '/satnet', 
    name: 'satnet',
    component: () => import('@/pages/SatoshiNetPage.vue'),
    meta: {
      title: '聪网 - SAT20'
    }
  },
  { 
    path: '/eco', 
    name: 'eco',
    component: () => import('@/pages/TokenomicsPage.vue'),
    meta: {
      title: '生态 - SAT20'
    }
  },
  { 
    path: '/roadmap', 
    name: 'roadmap',
    component: () => import('@/pages/RoadmapPage.vue'),
    meta: {
      title: '路线图 - SAT20'
    }
  },
  { 
    path: '/developers', 
    name: 'developers',  
    component: () => import('@/pages/DevelopersPage.vue'),
    meta: {
      title: '开发者 - SAT20'
    }
  },
  { 
    path: '/investor', 
    name: 'investor',
    component: () => import('@/pages/InvestorPage.vue'),
    meta: {
      title: '投资者 - SAT20'
    }
  },
  { 
    path: '/user', 
    name: 'user',
    component: () => import('@/pages/UserPage.vue'),
    meta: {
      title: '用户指南 - SAT20'
    }
  },
  { 
    path: '/docs/:category', 
    name: 'documentation',
    component: () => import('@/pages/Documentation.vue'),
    props: true,
    meta: {
      title: '文档 - SAT20'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
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

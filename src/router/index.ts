import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import StorePractice from '@/views/StorePractice.vue';
import PricingTier from '@/views/PricingTier.vue';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/store-practice',
    name: 'StorePractice',
    component: StorePractice,
  },
  {
    path: '/pricing-tier',
    name: 'PricingTier',
    component: PricingTier,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

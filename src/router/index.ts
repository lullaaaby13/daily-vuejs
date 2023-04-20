import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import StorePractice from '@/views/StorePractice.vue';
import PricingTier from '@/views/PricingTier.vue';
import Board from '@/views/board/Board.vue';
import Login from '@/views/board/Login.vue';
import HomeView from '../views/HomeView.vue';
import DashBoard from '../views/DashBoard.vue';

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
  {
    path: '/dash-board',
    name: 'DashBoard',
    component: DashBoard,
  },
  {
    path: '/board',
    name: 'Board',
    component: Board,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

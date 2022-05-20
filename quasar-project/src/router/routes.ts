import { h } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import IndexPage from 'pages/IndexPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: IndexPage },
      { path: 'counterx', component: () => import('pages/CounterPage.vue') },
    ],
  },
  // {
  //   path: '/counterx',
  //   component: HomeView,
  // },
  // Always leave this as last one,
  // but you can also remove it a
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/cut',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CutPage.vue') }],
  },
  {
    path: '/squads',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/SquadsPage.vue') }],
  },
  {
    path: '/whitelist',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/WhitelistPage.vue') },
    ],
  },
  {
    path: '/raffle',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RafflePage.vue') }],
  },
  {
    path: '/accounts',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AccountsPage.vue') }],
  },
  {
    path: '/staratlaslocker',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StarAtlasLocker.vue') },
    ],
  },
  {
    path: '/wrapper',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WrapperPage.vue') }],
  },
  {
    path: '/escrow-service',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EscrowPage.vue') }],
  },
  {
    path: '/coinflip',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CoinflipPage.vue') }],
  },
  {
    path: '/token',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TokenManagePage.vue') },
    ],
  },
  {
    path: '/burner',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BurnPage.vue') }],
  },

  {
    path: '/jobs',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/JobsPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

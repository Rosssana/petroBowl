
const routes = [
  {
    path: '/scoreKeeper',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ScoreKeeper.vue') }
    ]
  },
  {
    path: '/timeKeeper',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Timekeeper.vue') }
    ]
  },
  {
    path: '/moderator',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Moderator.vue') }
    ]
  },
  {
    path: '/bonus',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ModeratorBonus.vue') }
    ]
  },
  {
    path: '/generalScreen',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GeneralScreen.vue') }
    ]
  },
  {
    path: '/sortingScreen',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SortingScreen.vue') }
    ]
  },
  {
    path: '/sortingScreen2',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SortingScreen2.vue') }
    ]
  },
  {
    path: '/sortingFinal',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SortingFinal.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

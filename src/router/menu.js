export default [
  {
    path: '/tableList',
    name: 'tableList',
    component: () => import(/* webpackChunkName: "about" */ '../views/menu/TableList.vue')
  },
  {
    path: '/createFrom',
    name: 'createFrom',
    component: () => import(/* webpackChunkName: "about" */ '../views/menu/CreateForm.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]

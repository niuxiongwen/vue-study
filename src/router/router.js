import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    alias: '/page_home', // 别名
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food

    }),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/',
    redirect: to => {
      return '/'
    }
  },
  // 菜单start
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
  // 菜单end
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banner'
    }
  },
  {
    path: '/layout',
    name: 'layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/layout/Index.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/Table.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  },
  {
    // name 动态路由参数
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/Argu.vue'),
    props: true
  },
  {
    // 嵌套路由
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'children',
        component: () => import('@/views/Children.vue')
      }
    ]
  },
  {
    // 命名视图的使用
    path: '/name_view',
    components: {
      default: () => import('@/views/Children.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  {
    // 重定向
    path: '/main',
    // redirect: {
    //  name: 'home'
    // }
    redirect: to => {
      return '/'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/stucreate',
    name: 'stucreate',
    component: () => import('@/views/Stucreate.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]

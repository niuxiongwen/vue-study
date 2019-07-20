import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import menu from './menu'

Vue.use(Router)

const router = new Router({
  routes
})
const IS_LOGIN = true
// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (IS_LOGIN) next()
    else next({ name: 'login' })
  } else {
    if (to.name === 'login') {
      if (IS_LOGIN) next({ name: 'home' })
      else next()
    }
  }
})

router.afterEach((to, from) => {
  // logining
})
export default router
/**
 * 1、导航被触发
 * 2、在失活的组件（即将离开的页面足见你）里面调用离开守卫 beforeRouteLeave
 * 3、调用全局的前置守卫 beforeEach
 * 4、在重用组件里调用beforeRouteUpdate
 * 5、调用路由独享的守卫 beforeEach
 * 6、解析异步路由组件
 * 7、在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8、调用全局的解析守卫beforeResolve
 * 9、导航被确认。
 * 10、调用全局的 afterEach 钩子。
 * 11、触发 DOM 更新。
 * 12、用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数
 */

// export default new Router({
//   mode: 'history',
//   routes
// })

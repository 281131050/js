import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 初始化路由
export const router = new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: () => import(`@/components/HelloWorld`)
  }]
})

router.initRouter = function (pages) {
  let routes = pages.map((page, index) => {
    const routeComponent = () => import(`@/views${page.address}`)
    // const routeComponent = () => import('./views' + page.address + '.vue')
    return {
      path: page.address,
      name: page.name,
      component: routeComponent
    }
  })
  this.addRoutes(routes)
}

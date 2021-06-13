import Vue from 'vue'
import Router from 'vue-router'
import Pomodoro from '@/pages/Pomodoro'
import ComponentCollection from '@/pages/ComponentCollection'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Pomodoro,
      isShowLeftMenu: true,
      menuName: 'Dashboard',
    },
    {
      path: '/components',
      name: 'Components',
      component: ComponentCollection,
      isShowLeftMenu: true,
      menuName: 'Components',
    },
  ],
})
export default router

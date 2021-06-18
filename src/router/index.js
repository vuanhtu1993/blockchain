import Vue from 'vue'
import Router from 'vue-router'
import Pomodoro from '@/pages/Pomodoro'
import ComponentCollection from '@/pages/ComponentCollection'
import Layout from '@/pages/Layout'

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
      path: '/components.scss',
      name: 'Components',
      component: ComponentCollection,
      isShowLeftMenu: true,
      menuName: 'Components',
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      isShowLeftMenu: true,
      menuName: 'Layout',
    },
  ],
})
export default router

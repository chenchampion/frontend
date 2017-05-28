import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SignupView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import PagesView from '../views/PagesView.vue'
import CalendarView from '../views/CalendarView.vue'
import ProjectView from '../views/ProjectView.vue'
import DetailView from '../views/DetailView.vue'
import CompanyPageView from '../views/CompanyPageView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'companypage',
          name: 'CompanyPageView',
          component: CompanyPageView
        },
        {
          path: 'calendar',
          name: 'CalendarView',
          component: CalendarView
        },
        {
          path: 'shopping',
          name: 'ShopView',
          component: function (reslove) {
            return require(['../views/shopping/shopping.vue'], reslove)
          }
        },
        {
          path: 'projects',
          name: 'ProjectView',
          component: ProjectView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        },
        {
          path: 'group',
          name: 'group',
          component (resolve) {
            require.ensure(['../components/lists/group.vue'], () => {
              resolve(require('../components/lists/group.vue'))
            })
          },
          meta: {requiresAuth: true}
        },
        {
          path: 'tasks',
          name: 'tasks',
          component (resolve) {
            require.ensure(['../components/lists/tasks.vue'], () => {
              resolve(require('../components/lists/tasks.vue'))
            })
          },
          meta: {requiresAuth: true}
        },
        {
          path: 'finance',
          name: 'finance',
          component (resolve) {
            require.ensure(['../components/lists/finance.vue'], () => {
              resolve(require('../components/lists/finance.vue'))
            })
          },
          meta: {requiresAuth: true}
        },
        {
          path: 'prospectus',
          name: 'prospectus',
          component (resolve) {
            require.ensure(['../components/lists/prospectus.vue'], () => {
              resolve(require('../components/lists/prospectus.vue'))
            })
          },
          meta: {requiresAuth: true}
        },
        {
          path: 'orders',
          name: 'orders',
          component (resolve) {
            require.ensure(['../components/lists/orders.vue'], () => {
              resolve(require('../components/lists/orders.vue'))
            })
          },
          meta: {requiresAuth: true}
        },
        {
          path: 'cart',
          name: 'cart',
          component (resolve) {
            require.ensure(['../components/lists/cart.vue'], () => {
              resolve(require('../components/lists/cart.vue'))
            })
          },
          meta: {requiresAuth: true}
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'SignupView',
      component: SignupView
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

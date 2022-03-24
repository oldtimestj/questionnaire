/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2022-03-21 12:02:04
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-24 21:36:19
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/components/home'
import Questionnaire from '@/components/Questionnaire'
import Userinfo from '@/components/Userinfo'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/admin',
          name: 'admin',
          component: Admin
        },
        {
          path: '/questionnaire',
          name: 'questionnaire',
          component: Questionnaire
        },
        {
          path: '/userinfo',
          name: 'userinfo',
          component: Userinfo
        }
      ]
    },

  ]
})

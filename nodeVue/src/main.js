/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2022-03-21 12:02:04
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-22 20:31:36
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";

Vue.prototype.axios = axios;
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

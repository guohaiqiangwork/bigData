// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import dataV from '@jiaminghi/data-view'
import store from './store'
import './common/flexible'

import api from './api/index.js'
Vue.prototype.$api = api
// 引入vue-awesome
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/index.js";
// 全局注册图标
Vue.component("icon", Icon);

// 引入全局css
import "./assets/scss/style.scss";
Vue.config.productionTip = false
Vue.use(dataV);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

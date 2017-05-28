// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import VueResource from 'vue-resource'
import auth from './auth'
import store from './vuex/store'
import './assets/css/index.styl'
import infiniteScroll from 'vue-infinite-scroll'
import VueLazyload from 'vue-lazyload'  // 引入图片懒加载模块

Vue.config.debug = true
Vue.use(VueResource)
Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  error: require('./assets/404.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
}
)

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')

// Check the user's auth status when the app starts
auth.checkAuth()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

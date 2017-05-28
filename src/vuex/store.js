/**
 * Created by yi on 2017-01-06.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import activities from './modules/activities'
import book from './modules/book'
import subject from './modules/subject'
import group from './modules/group'
import search from './modules/search'
import user from './modules/user'
import menus from './modules/menu'
// 告诉 vue “使用”  vuex
Vue.use(Vuex)

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  modules: {
    menus,
    movie,
    activities,
    book,
    subject,
    group,
    search,
    user
  }
})

import * as actions from '../actions'
import * as getters from '../getters'
import * as uz from './uz'

// 创建一个对象来保存应用启动时的初始状态
const state = {
  'headerTitle': '主页',
  'menus': uz.NAME_TITILE,
  'menuShow': false,
  'loadingShow': false,
  'news': 5
}
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数
  UPDATE_TITLE (state, title) {
    state.headerTitle = title
  },
  UPDATE_MENUSHOW (state) {
    state.menuShow = !state.menuShow
  },
  UPDATE_LOADING (state, data) {
    state.loadingShow = data
  },
  UPDATE_NEWS (state) {
    state.news = 0
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

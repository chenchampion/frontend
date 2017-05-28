<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="menu-header">
        <img class="menu-avatar" src="https://avatars0.githubusercontent.com/u/11735533?v=3&amp;u=02b515725d0e52cdf5f02e2dbdc98c1de3ddbcc2&amp;s=400"
          alt="">
        <div v-if="isLogin">
          <div class="menu-title">
            <p>{{username}}，欢迎使用</p>
            <a href="#" @click.prevent="logout()">退出登录</a>
          </div>
        </div>
        <div v-else>
          <div class="menu-title">
            <p>请登录/注册</p>
            <router-link :to="{name: 'LoginView'}">登录</router-link> 或 <router-link :to="{name: 'SignupView'}">注册</router-link>
          </div>
          
        </div>       
      </div>
      <div v-if="isLogin">
        <div class="menu-ul">
          <div v-for='menu in menus' @click="updateHeader(MENU_CONVERT[menu], menu)">
            <router-link class="icon-quanbu iconfont item border-1px" :to="menu">
              <div class="menu-icon">
                <i class="iconfont " :class="'icon-'+ menu"></i>
              </div>
              <span class="menu-text">{{MENU_CONVERT[menu]}}</span>
              <div class="menu-new" v-show="menu ==='day' && news>0">
                <span>5</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-other">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import auth from '../../auth'
const MENU_CONVERT = { 'home': '主页', 'companypage': '公司', 'calendar': '日程', 'shopping': '商城', 'projects': '项目', 'group': '人力资源', 'tasks': '任务发布', 'finance': '资金状态', 'prospectus': '募资发布', 'orders': '订单状态', 'cart': '购物车' }
export default{
  name: 'v-menu',
  props: {
    show: {
      type: Boolean
    }
  },
  data () {
    return {
      MENU_CONVERT: MENU_CONVERT,
      isLogin: auth.user.authenticated,
      username: auth.user.username
    }
  },
  computed: {
    ...mapState({
      menus: state => state.menus.menus,
      news: state => state.menus.news
    })
  },
  methods: {
    updateHeader (title, menu) {
      this.$store.commit('UPDATE_TITLE', title)
      this.$store.commit('UPDATE_MENUSHOW')
      if (menu === 'day') {
        this.$store.commit('UPDATE_NEWS')
      }
    },
    logout () {
      auth.logout(this)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'menu.styl';

</style>

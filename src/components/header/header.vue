<template>
  <div class="h50">
    <div class="page-cover" v-show="menuShow"></div>
    <header class="header" :class="{'show': menuShow}">
      <header class="bar bar-nav">
        <div class="pull-left"  @click="isShow" v-if="!showBack">
          <span class="iconfont icon-fenlei"></span>
        </div>
         <div v-else class="back" @click="goBack">返回</div>
        <div class="title">{{headerTitle}}</div>
      </header>
    </header>
    <v-menu :show="menuShow"></v-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  import vMenu from '../menu/menu.vue'
  import {mapState} from 'vuex'
  export default
  {
    name: 'v-header',
    components: {
      vMenu
    },
    watch:{
      $route(){
          this.showBack = location.pathname.split("/").length>3 ;
      }
    },
    data () {
      return {
        show: false,
        showBack: (function(){
            return location.pathname.split("/").length>3        
        })()
      }
    },
    computed: {
      ...mapState({
        headerTitle: state => state.menus.headerTitle,
        menuShow: state => state.menus.menuShow
      })
    },
    methods: {
      goBack(){
          history.go(-1);
      },
      isShow () {
        this.$store.commit('UPDATE_MENUSHOW')
      },
      hideDetail () {
        this.detailShow = false
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "header.styl";
  .back{
      font-size:12px;
      position:fixed;
      left:20px;
  }
  .h50{
     height:50px;
  }
</style>

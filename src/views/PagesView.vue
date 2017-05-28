<template>
  <div class="pages-view">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vMenu from '../components/menu/menu.vue'
import vHeader from '../components/header/header.vue'

export default {
  name: 'pages-view',
  components: {
    vMenu,
    vHeader
  },
  data () {
    return {
      talion: ''
    }
  },
  methods: {
    open: function () {
      this.talion = 'open'
    },
    close: function () {
      this.talion = ''
    }
  }
}
</script>

<style>
  #pages-view {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    padding-top: 50px;
  }
  #pages-view .show {
    transform: translateX(250px);
  }
  #pages-view .page-cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 7;
  }
  #pages-view .first{
    position: fixed;
    top: 0px;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: red;
  }
</style>

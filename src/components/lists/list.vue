<template>
  <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
      <div v-for="data in datas">
          <a v-if="data.url" :href="data.url " target="view_window">
          </a>
          <v-card :data="data" ></v-card>
      </div>
  </div>

</template>

<script>
import vCard from '../card/card.vue'
import auth from '../../auth'
export default
{
  name: 'v-list',
  props: {
    type: {
      type: String
    }
  },
  data () {
    return {
      datas: [],
      page: 1,
      busy: false
    }
  },
  computed: {

  },
  methods: {
    loadTop () {
      this.$store.commit('UPDATE_LOADING', true)
      console.log(this.type)
      if (this.type === 'group') {
        auth.getGroupMember(this)
      } else {
        this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`).then((response) => {
          this.datas = this.datas.concat(response.body.results)
          this.busy = false
          this.$nextTick(() => {
            console.log('loading finished')
            this.$store.commit('UPDATE_LOADING', false)
          })
        })
      }
    },
    loadMore () {
      this.busy = true
      this.loadTop()
      this.page++
    }
  },
  components: {
    vCard
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .list {
    padding: 15px;
  }
</style>

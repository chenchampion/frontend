<template>
  <div>
    <company-page :company="boject"></company-page>
  </div>
</template>

<script>
import Vue from 'vue'
import vCompany from '../components/CompanyView.vue'
import auth from '../auth'

Vue.component('company-page', require('../components/CompanyView.vue'))
export default {
  components: {
    vCompany
  },
  data () {
    return {
      boject: {
        type: Object,
        default () {
          return {
          }
        }
      }
    }
  },
  mounted () {
    auth.getUserCompany(this)
    console.log(this.boject)
  }
}
</script>

<template>
  <div>
    <h1>vue-event-calendar</h1>
    <vue-event-calendar :events="demoEvents"></vue-event-calendar>
      <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <!-- In here do whatever you want, make you owner event template -->
          {{event}}
        </div>
      </template>
    </vue-event-calendar>
  </div>
</template>

<script>
import Vue from 'vue'
import 'vue-event-calendar/dist/style.css' // ^1.1.10, CSS has been extracted as one file, so you can easily update.
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en'}) // locale can be 'zh' , 'en' , 'es', 'pt-br'

let today = new Date()
export default {
  name: 'calender-view',
  data () {
    return {
      demoEvents: [{
        date: `${today.getFullYear()}/${today.getMonth() + 1}/15`,
        title: 'Title-1',
        desc: 'longlonglong description'
      },
      {
        date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
        title: 'Title-2'
      },
      {
        date: `${today.getFullYear()}/${today.getMonth() === 11 ? 1 : today.getMonth() + 2}/06`,
        title: 'Title-3',
        desc: 'description'
      }]
    }
  }
}
</script>

<style>
#calender-view {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
h1, h2, h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.t-center{
  text-align: center;
  margin: 20px;
}
.mt150{
  margin-top: 150px;
}

.__vev_calendar-wrapper .cal-wrapper{
  width:auto!important;
  padding:0px!important;
}

.__vev_calendar-wrapper .events-wrapper{
  position:static!important;
  width:auto!important;
}
</style>

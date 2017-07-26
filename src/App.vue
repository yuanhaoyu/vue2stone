<template>
  <div id="app">
    <Sprogress :width="mywidth+'%'"></Sprogress>
    <Sstar :count="this.myCount" :max="5"></Sstar>
    <Scalendarfix></Scalendarfix>
  </div>
</template>

<script>
import Sprogress from './components/Sprogress'
import Sstar from './components/Sstar'
import Scalendarfix from './components/Scalendarfix'

export default {
  name: 'app',
  data () {
    return {
      mywidth: 10,
      myCount: 4
    }
  },
  components: {
    Sprogress,
    Sstar,
    Scalendarfix
  },
  created () {
    let mywidthClock = setInterval(() => {
      this.mywidth = this.mywidth + 10
      if (this.mywidth === 100) clearInterval(mywidthClock)
    }, 1000)
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

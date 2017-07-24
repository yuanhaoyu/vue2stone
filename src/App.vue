<template>
  <div id="app">
    <Sprogress width="80%" ></Sprogress>
  </div>
</template>

<script>
import Sprogress from './components/Sprogress'

export default {
  name: 'app',
  components: {
    Sprogress
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

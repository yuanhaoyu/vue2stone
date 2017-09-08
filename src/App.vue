<template>
  <div id="app">
    <ul>
      <li>
        <p>1. 进度条</p>
        <s-progress :width="mywidth+'%'"></s-progress>
      </li>
      <li>
        <p>2. 打分星</p> 
        <s-star :count="this.myCount" :max="5"></s-star>
      </li>
      <li>
        <p>3. 选择</p>    
        <s-select :lists="['xiaoming', 'xiaohong']"></s-select>
      </li>
      <li>
        <p>4. 等待1</p>
        <s-loading></s-loading>
      </li>
      <li>
        <p>5. 等待2</p>
        <s-circle></s-circle>
      </li>
      <li>
        <p>6. 开关</p>
        <s-switch :inColor="'white'" :outColor="'black'"></s-switch>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      mywidth: 10,
      myCount: 4,
      data1: [1, 2, 3, '444'],
      data2: [1, 2, 3, '444'],
      data3: [1, 2, 3, '444']
    }
  },
  created () {
    let mywidthClock = setInterval(() => {
      this.mywidth = this.mywidth + 10
      if (this.mywidth === 100) clearInterval(mywidthClock)
    }, 1000)
  },
  mounted () {
    this.$toast.show({msg: 'this is a toast'})
    // setTimeout(() => {
    //   this.$toast.hide()
    // }, 3000)
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html{
  font-size: 20px;
  width: 100%;
  overflow-x: hidden;
}
ul{
  padding: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
hr{
  margin: 10px 0;
  outline: 0;
  border: 0;
}
p{
  text-indent: 10px;
  font-size: 15px;
  margin: 12px 0;
}
</style>

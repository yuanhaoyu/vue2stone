<template>
    <div id="Sstar">
      <div v-for="(list, index) in lists" :key="index" class="starBase" :class="list?'star':'unstar'"></div>
    </div>
</template>

<script>
export default {
  name: 'Sstar',
  data () {
    return {
      lists: []
    }
  },
  props: ['count', 'max'],
  created () {
    let all = parseInt(this.max) || 5
    let full = parseInt(this.count) < all ? Math.abs(parseInt(this.count)) : all || 0 // 满
    let empty = all - full // 空
    this.lists = new Array(full).fill(1).concat(new Array(empty).fill(0))
  }
}
</script>


<style scoped>
#Sstar{
  padding: 5px;
  overflow: hidden;
}
.starBase{
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 5px;
}
.star{
  background-image: url('../assets/img/star.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.unstar{
  background-image: url('../assets/img/unstar.png');  
  background-size: 100%;
  background-repeat: no-repeat;  
}
</style>

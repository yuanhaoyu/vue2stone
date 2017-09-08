<template>
  <div id="picker">
    <header>{{title}} <div class="sureBtn" @click="sure">确定</div></header>
    <div class="picker-items">
      <div class="picker-item">
        <div v-for="(item1, index) in data1" :key="index">{{item1}}</div>
      </div>
      <div class="picker-item">
        <div v-for="(item2, index) in data2" :key="index">{{item2}}</div>        
      </div>
      <div class="picker-item">
        <div v-for="(item3, index) in data3" :key="index">{{item3}}</div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-picker',
  props: {
    title: {
      type: String
    },
    data1: {
      type: Array
    },
    data2: {
      type: Array
    },
    data3: {
      type: Array
    },
    sure: {
      type: Function
    }
  }
}

</script>

<style scoped>
#picker{
  width: 100%;
  height: 13rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #cfd5da;
}
header{
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  font-size: 0.8rem;
  background: white;
  text-align: center;
  border-top: 1px solid #cfd1d4;
  position: relative;
}

#picker header .sureBtn{
  position: absolute;
  top: 0;
  right: 0.8rem;
  width: 2rem;
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
  font-size: 0.92rem;
  color: #0894ec;
}

.picker-items{
  width: 100%;
  display: flex;
  justify-content: center;
}
.picker-item{
  padding: 20px;
  text-align: center;
}
.picker-item div{
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
}
</style>


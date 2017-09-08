<template>
  <div id="Sselect">
    <div class="selectBase" :class="classOut[index]" v-for="(list, index) in lists" :key="index" @click="setChoose(index)">
      <div class="circle">
        <div :class="classIn[index]"></div>
      </div>
      <div class="Sselect-content">{{list}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-select',
  data () {
    return {
      classOut: [],
      classIn: []
    }
  },
  props: {
    lists: {
      type: Array,
      default: ['1. test1', '2. test2']
    }
  },
  methods: {
    setChoose (index) {
      this.$set(this.classIn, this.classIn.fill(''))
      this.$set(this.classOut, this.classOut.fill(''))
      this.$set(this.classIn, index, 'activeIn')
      this.$set(this.classOut, index, 'activeOut')
    }
  },
  created () {
    this.classOut = new Array(this.lists.length).fill('')
    this.classIn = new Array(this.lists.length).fill('')
  }
}
</script>

<style scoped>
#Sselect{
  margin-left: 1rem;
}
.selectBase{
  width: 14.375rem;
  height: 2.5rem;
  line-height: 2.5rem;
  background: #FFFFFF;
  box-shadow: 0 1px 8px 0 #AEAEAE;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}
.circle{
  width: 1rem;
  height: 1rem;
  background: #FFFFFF;
  border: 2px solid #BFBFBF;
  border-radius: 50%;
  float: left;
  margin-left: 2rem;
  margin-top: 0.58rem;
}
.activeOut{
  background: #ADE3FB;
  border: 2px solid #03A9F4;
  border-radius: 5px;
}
.activeIn{
  width: 0.6rem;
  height: 0.6rem;
  background: #03A9F4;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 0.2rem;
}
.Sselect-content{
  float: left;
  margin-left: 1.4rem;
}

</style>


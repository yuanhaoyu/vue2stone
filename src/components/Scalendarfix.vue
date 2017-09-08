<template>
  <div id="Scalendarfix">
      <div class="mounth">
        <div class="day" v-for="(list1,index) in initLists1" :key="index"><div :class="dakaData1[index]?'daka':'undaka'" v-show="list1!==0">{{list1}}</div></div>
      </div>
      <div class="mounth">
        <div class="day" v-for="(list1,index) in initLists2" :key="index"><div :class="dakaData2[index]?'daka':'undaka'" v-show="list1!==0">{{list1}}</div></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 's-calendarfix',
  data () {
    return {
      initLists1: [],
      initLists2: [],
      dakaData1: [],
      dakaData2: []
    }
  },
  methods: {
    /**
     * 初始化月份信息,
     * @param {Number} empty 日历中该月起始空的天数
     * @param {Number} full 日历中该月最后一天是多少
     * @return {Array} 返回月份信息（数组），其中空的日子为0
     */
    initDaysForMounth (empty, full) {
      let mounthArr = []
      let i = 1
      while (full) {
        mounthArr.push(i)
        i++
        full--
      }
      return new Array(empty).fill(0).concat(mounthArr)
    }
  },
  created () {
    this.initLists1 = this.initDaysForMounth(4, 30)
    this.initLists2 = this.initDaysForMounth(6, 31)
    this.dakaData1 = new Array(4).concat([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    this.dakaData2 = new Array(6).concat([0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  }
}
</script>

<style scoped>
.mounth{
  width: 350px;
  height: auto;
  padding: 5px;
  overflow: hidden;
}
.day{
  float: left;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 8px;
  margin-top: 8px;
}
.daka{
  background: #D4F0FD;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;  
}
.undaka{
  border: 3px solid #03A9F4;
  width: 34px;
  height: 34px;
  line-height: 34px;
  border-radius: 50%;  
}
</style>


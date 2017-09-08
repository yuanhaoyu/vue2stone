<template>
  <span id="Sswitch" @click="changeMe" :style="{'backgroundColor':outColor}">
    <span class="cicle" :style="{'backgroundColor':inColor}"></span>
  </span>
</template>

<script>
export default {
  name: 's-switch',
  data () {
    return {
      flag: true
    }
  },
  props: {
    inColor: {
      type: String,
      default: 'white'
    },
    outColor: {
      type: String,
      default: '#9F9F9F'
    }
  },
  methods: {
    changeMe () {
      this.flag = !this.flag
      if (this.flag) {
        document.querySelector('#Sswitch>.cicle').className = 'cicle left'
      } else {
        document.querySelector('#Sswitch>.cicle').className = 'cicle right'
      }
    }
  }
}
</script>

<style scoped>
#Sswitch{
  display: inline-block;
  width: 44px;
  height: 22px;
  position: relative;
  bottom: -5px;
  border-radius: 15px;
}
.cicle{
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  transition: transform .3s;
  transform: translate(3px, 3px);
}
.right {
  transform: translate(25px, 3px);
}
.left {
  transform: translate(3px, 3px);
}
</style>



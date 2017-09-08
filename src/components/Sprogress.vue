<template>
  <div id="Sprogress">
    <div class="out">
      <div class="in" :style="{ width: this.width , background: this.bgColor}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-progress',
  props: {
    width: {
      type: String
    },
    bgColor: {
      type: String
    }
  }
}
</script>

<style scoped>
#Sprogress{
  width: 100%;
  height: 11px;
}
.out{
  width: 100%;
  height: 11px;
  background: #E0E5E5;
}
.in{
  width: 0%;
  height: 11px;
  background: #FFE146;
  transition: width 1s;
}
</style>


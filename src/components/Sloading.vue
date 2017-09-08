<template>
  <div id="sloading">
    <div class="spinner">
      <div class="double-bounce1" :style="styles"></div>
      <div class="double-bounce2" :styles="styles"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-loading',
  data () {
    return {
      styles: {}
    }
  },
  props: {
    color: {
      type: String
    }
  },
  created () {
    this.styles = {
      backgroundColor: this.color
    }
  }
}
</script>

<style scoped>
#sloading{

}
.spinner {
  width: 60px;
  height: 60px;
  position: relative;
  margin: 100px auto;
}
 
.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #FFD440;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: bounce 2.0s infinite ease-in-out;
}
 
.double-bounce2 {
  animation-delay: -1.0s;
}
 
 
@keyframes bounce {
  0%, 100% {
    transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
  }
}

</style>



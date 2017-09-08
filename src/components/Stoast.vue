<template>
  <div id="toast" v-show="show">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 's-toast',
  data () {
    return {
    }
  },
  props: {
    msg: {
      type: String,
      default: '这是个toast'
    },
    size: {
      type: String
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
#toast{
  max-width: 100px;
  max-height: 30px;
  padding: 3px;
  line-height: 30px;
  text-align: center;
  font-size: 13px;
  border-radius: 6px;
  margin: 8px auto;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  animation: fadeIn 1s
}
#toast p{
  margin: 0;
  padding: 0;
  text-indent: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


</style>


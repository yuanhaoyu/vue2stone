<template>
  <div id="scircle">
    <div class="scircle-content">
      <div class="scircle-left">
        <div class="circle-left"></div>
      </div>
      <div class="scircle-right">
        <div class="circle-right"></div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-circle'
}
</script>

<style scoped>
.scircle-content{
  width: 36px;
  height: 36px;
  position: relative;
  margin-bottom: 10px;
  margin: 0 auto;
}
.scircle-left{
  width: 18px;
  height: 36px;
  position: absolute;  
  overflow: hidden;
  top:0;
  left: 0;
}

.scircle-right{
  width: 18px;
  height: 36px;
  position: absolute;
  overflow: hidden;
  top:0;  
  right: 0; 
}
.circle-left{
  top: 0;
  left: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  border: 6px solid #FFD440;
  opacity: 0.9;
  border-radius: 50%;  
  border-top: 6px solid transparent;
  transform: rotate(225deg);  
  border-right: 6px solid transparent;
  animation:runLeft 5s linear infinite;
}
.circle-right{
  top:0;
  right: 0;
  position: absolute;  
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 6px solid #FFD440;
  border-bottom: 6px solid transparent;
  border-left: 6px solid transparent;
  transform: rotate(225deg);
  animation:runRight 5s linear infinite;
}
@keyframes runLeft{
  0%{
     transform: rotate(-135deg);
  }
  50%{
     transform: rotate(-135deg);    
  }
  100%{
     transform: rotate(45deg);        
  }
}

@keyframes runRight{
  0%{
     transform: rotate(-135deg);
  }
  50%{
     transform: rotate(45deg);    
  }
  100%{
     transform: rotate(45deg);        
  }
}
</style>


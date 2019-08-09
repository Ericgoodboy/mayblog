<template>
  <div @click="handelclick" class="test">
    <div class="box1"></div>
    <div class="box2"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "test",
  data() {
    return {
      url: "/api/initIndex",
      response: "sdafs"
    };
  },
  methods: {
    getResponse: function() {
      let a = axios.create({
        baseURL: this.url,
        timeout: 1000,
        dataType:"jsonp",
        
      });
      a.get().then(res=>{
          window.console.log(res)
          this.response = res.data
      }).catch(res=>{
          window.console.log(res)
      })
    },
    handelclick:function(){
      this.$router.push('/')
    }
  },
  mounted(){
    window.console.log(this.$route)
  }
};
</script>

<style scoped>
.test{
  position: fixed;
  top:-30PX;
  height: 100%;
  width: 100%;
  background: #333;
  z-index: 1000;
  transform: scaleY(1);
  overflow:visible;
}
.box1{
  position: absolute;
  height: 120px;
  width:120px;
  left: 50%;
  top: 40%;
  background: #779;
  animation: box1 2s linear infinite;
  opacity: .6
  /* animation: box1 2s linear 0 inherit center cubic-bezier(0.075, 0.82, 0.165, 1); */
}
.box2{
  position: absolute;
  height: 120px;
  width:120px;
  left: 50%;
  top: 40%;
  background: #779;
  animation: box2 2s linear infinite;
  opacity: .6;
  transform: rotate(45deg)
  /* animation: box1 2s linear 0 inherit center cubic-bezier(0.075, 0.82, 0.165, 1); */
}

@keyframes box2 {
  0%{
    transform: rotate3d(0,1,0,0deg)rotateZ(45deg)
  }
  50%{
    transform: rotate3d(0,1,0,180deg)rotateZ(45deg)
  }
  100%{
    transform: rotate3d(0,1,0,0deg)rotateZ(45deg)
  }

}
@keyframes box1 {
  0%{
    transform: rotate3d(0,0,1,0deg)rotateZ(45deg)
  }
  50%{
    transform: rotate3d(0,0,1,180deg)rotateZ(45deg)
  }
  100%{
    transform: rotate3d(0,0,1,360deg)rotateZ(45deg)
  }

}
</style>
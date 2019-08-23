<template>
  <div  class="test">
    <div @click="handelclick"  class="close">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </div>
    <v-person></v-person>
  </div>
</template>

<script>
import personcard from '../personcard/personcard'
import axios from "axios";
export default {
  name: "test",
  data() {
    return {
      url: "/api/initIndex",
      response: "sdafs"
    };
  },
  components:{
    "v-person":personcard
  }
  ,
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
.close{
  position: fixed;
  right: 200px;
  top: 200px;
  cursor: pointer;
  color: #999
}
.close:hover{
  color: #bbb;
  font-size: 20px;
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
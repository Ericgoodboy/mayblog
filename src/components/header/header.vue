<template>
    <div  class="header">
        <div class="wrape">
            <ul>
                <li v-for="item in linkList"  :key="item.id">
                    <router-link v-if="item.show" :to="item.url">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
// import toastr from 'toastr'
import axios from "axios"
export default {
  name: 'v-header',
  props: {
    msg: String
  },
  data(){
      return {
          linkList:[
              {id:1,title:"首页",url:"/",show:true},
              {id:2,title:"前端",url:"/subbody/fontend",show:true},
              {id:3,title:"后端",url:"/subbody/backend",show:true},
              {id:4,title:"mayeye",url:"/test",show:true},
              {id:5,title:"想法",url:"/subbody/thinking",show:true},
              {id:6,title:"机器学习",url:"/subbody/ml",show:true},
              {id:7,title:"+编辑",url:"/editor/0",show:true},
          ]
      }
  },
  methods:{
  },
  mounted(){
       window.console.log("===========================",this.userData)
      window.login=function(info){
      axios({
        method: "post",
        url: "/login",
        data: info
      }).then(function(res) {
         if(res.data.success){
           window.console.log("登录成功")
         }else{
           window.console.log("登录失败")
         }
      })
    }
  }
}
</script>
<style scoped>
.header{
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    line-height: 60px;
    background: #f5f5f5;
    z-index: 100;
}
.header:hover{
    box-shadow:4px 0px 3px #333333;
}
.header ul{
    width: 80%;
    margin: 0 auto;
}
.header li{
    float: left;
    width: 12.5%;
    position: relative;
    text-decoration: none;
    display: flex;
    flex-direction: column;
}
.header li a{
    color: #333333;
    font-size: 16px; 
    text-decoration: none;
    text-align: center
}

.header li:before{
    content: "";
    position: absolute;
    left: 50%;
    background: #409eff;
    height: 2px;
    width: 0;
    -webkit-transition: .2s ease-out;
    transition: .2s ease-out;
}
.header li:after{
    content: "";
    position: absolute;
    left: 50%;
    top:58px;
    background: #409eff;
    height: 2px;
    width: 0;
    -webkit-transition: .2s ease-out;
    transition: .2s ease-out;
}
.header li:hover:before{
    width: 100%;
    left: 0;
}
.header li:hover::after{
    width: 100%;
    left: 0;
}
</style>



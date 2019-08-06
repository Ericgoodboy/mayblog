<template>
    <div class="header">
        <div class="wrape">
            <ul>
                <li v-for="item in linkList" :key="item.id">
                    <router-link :to="item.url">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">

export default {
  name: 'v-header',
  props: {
    msg: String
  },
  data(){
      return {
          linkList:[
              {id:1,title:"首页",url:"/"},
              {id:2,title:"前端",url:"/subbody/前端"},
              {id:3,title:"后端",url:""},
              {id:4,title:"test",url:"/test"},
              {id:5,title:"首页",url:""},
              {id:6,title:"首页",url:""},
              {id:7,title:"编辑",url:"/editor"},
          ]
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
    z-index: 1000;
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
}
.header li a{
    color: #333333;
    font-size: 16px; 
    text-decoration: none;
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



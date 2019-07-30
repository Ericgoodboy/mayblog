<template>
    <div class="header">
        <div class="wrape">
            <ul>
                <li>首页</li>
                <li>前端</li>
                <li>后端</li>
                <li>专题</li>
                <li>icon</li>
                <li>系统</li>
                <li>影视后期</li>
                <li>V生活</li>
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



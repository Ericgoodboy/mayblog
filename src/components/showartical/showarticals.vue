<template>
  <div>
      <div class="title">{{ title }}</div>
      <div class="markdown-body body" v-html="body">{{ body }}</div>
  </div>
</template>

<script>
// import 'github-markdown-css/github-markdown.css'
import axios from "axios";
export default {
  name: "artical",
  data() {
      return {
          title:"ppp",
          body:"<h1>Hello Editor<h1>",
          author:"",
          saw:0,
          user:""
      }
  },
  methods: {
    init() {
        let that = this
      axios({
        method: "post",
        url: "/get/fullartical",
        data:{
            id:this.$route.params.id
        }
      }).then(function(res) {
          window.console.log(res)
        that.body = res.data.body
        that.title = res.data.title
        that.user= res.data.user
        window.data=res.data.body
      });
    }
  },
  mounted() {
    window.console.log("i am monteded");
    this.init()
  }
};
</script>

<style scoped>
.title{
    /* background: -webkit-repeating-linear-gradient(#777,#999,#333); */
    margin:30px auto;
    line-height: 80px;
    font-size: 30px;
    height: 80px;
    width: 70%;
    text-align: center;
}
.body{
    width: 60%;
    margin: 40px auto;

}




</style>
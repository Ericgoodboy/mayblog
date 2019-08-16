<template>
  <div>
      <div class="title">{{ title }}</div>
      <div class="body" v-html="body">{{ body }}</div>
  </div>
</template>

<script>
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
      });
    }
  },
  mounted() {
    window.console.log("i am monteded");
    this.init()
  }
};
</script>

<style>
.title{
    background: -webkit-repeating-linear-gradient(#777,#999,#333);
    margin:30px auto;
    line-height: 80px;
    font-size: 30px;
    height: 80px;
    width: 70%;
}
.body{
    width: 60%;
    margin: 40px auto;

}
/* table 样式 */
table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
table td,
table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}

/* blockquote 样式 */
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2 !important;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 30px;
  background-color: #f1f1f1;
}

/* code 样式 */
code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
pre code {
  display: block;
}

/* ul ol 样式 */
ul, ol {
  margin: 10px 0 10px 20px;
}
</style>
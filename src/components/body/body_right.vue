<template>
  <div ref="block" class="body_right">
    <div class="title">
      <img src="../../assets/img/timeline-bg.1175b5c0.jpg" alt srcset />
      <h2>Mayeye大事件</h2>
    </div>
    <div class="hot-article">
      <h1>热门文章</h1>
    </div>
    <div class="article-list">
      <ul>
        <li v-for="item in hotarticals" :key="item.id">
          <router-link :to="'/showartical/'+item.aid">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "body_right",
  props:["hotarticals"],
  methods: {
    handleScroll() {
      var e = document.body.scrollTop || document.documentElement.scrollTop;
      if (this.$refs["block"] != undefined) {
        if (e < 300) {
          this.$refs["block"].style.top = -e + 120 + "px";
        }
      }
    },
    
  },
  mounted() {
    window.console.log("---------------------")
    window.console.log(this.hotarticals)
}
};
</script>

<style scoped>
.body_right {
  width: 20%;
  height: 1200px;
  /* background: #000; */
  /* border:solid 1px #000; */
  float: left;
  margin-left: 30px;
  margin-top: 20px;
  position: fixed;
  right: 30px;
  top: 120px;
}
.body_right .title {
  /* background: url("../../assets/img/timeline-bg.1175b5c0.jpg") no-repeat; */
  overflow: hidden;
  position: relative;
}
.body_right .title img {
  width: 100%;
  transition: 0.8s;
  height: 200px;
  background: no-repeat;
  transform: scaleX(1.2);
}
.body_right .title img:hover {
  transform: scaleX(1.8) translateX(20px);
}
.body_right .title h2 {
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -100%);
  color: #999;
}
.hot-article {
  width: 100%;
  height: auto;
  border-bottom: #f56c6c solid 1px;
  margin-top: 30px;
}
.hot-article h1 {
  display: block;
  width: 100px;
  height: 35px;
  background: #f56c6c;
  line-height: 35px;
  text-align: center;
  font-weight: 500;
  color: aliceblue;
  cursor: pointer;
}
.article-list {
  width: 85%;
  margin: 10px auto;
  font-size: 16px;
  text-align: left;
  line-height: 150%;
}
.article-list li {
  list-style-type: disc;
  margin-top: 10px;
}
.article-list li a{
    text-decoration: none;
    color: #333;
    cursor: pointer;
    
}
</style>
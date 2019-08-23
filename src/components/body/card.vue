<template>
  <div class="card">
    <div class="infoline">
      <div class="time">{{ time }}</div>
      <div class="detail clearfix">
        <div @click="showit()" class="title">{{ title }}</div>
        <div class="infos">
          <ul>
            <li>
              <i class="fa fa-user" aria-hidden="true"></i> Mayeye
            </li>
            <li>
              <i class="fa fa-eye" aria-hidden="true"></i> 观看
            </li>
            <li>
              <i class="fa fa-commenting-o" aria-hidden="true"></i>评论
            </li>
          </ul>
        </div>
      </div>
      <div v-html="content" class="content"></div>
      <div class="footer">
        <div class="category">
          <i class="fa fa-book" aria-hidden="true"></i>
          {{ mapDtype[type] }}
        </div>
        <div class="more" @mouseenter="showMore()">
          更多
          <i style="width:12px;" :class="'fa fa-angle-'+dir" aria-hidden="true"></i>
          <div @mouseenter="showMore()" @mouseleave="hideMore()" class="more-panel">
            <ul :class="showmore ? 'show':''">
              <li @click="more()">修改</li>
              <li @click="totop()">置顶</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "card",
  props: ["aid", "time", "content", "type", "title"],
  data() {
    return {
      mapDtype: {
        1: "前端",
        2: "后端",
        3: "想法",
        4: "机器学习"
      },
      dir: "right",
      showmore: false
    };
  },
  components: {},
  methods: {
    showit() {
      this.$router.push("/showartical/" + this.aid);
      window.console.log(this.type);
    },
    more() {
      this.$router.push("/editor/" + this.aid);
    },
    showMore() {
      this.showmore = true;
      this.dir = "up";
    },
    hideMore() {
      this.showmore = false;
      this.dir = "right";
    },
    totop() {
      let that = this;
      axios({
        method: "get",
        url: "/totop",
        params:{
    aid: this.aid
        },
      }).then(res => {
        if(res.data=="ok"){
          that.$toast({
            text: "置顶成功",
            type: "success"
            // duration: 3000
          });
          that.$emit("changeTop",{
            aid:that.aid,
            title:that.title,
          })
        }
      });
    }
  }
};
</script>

<style  scoped>
.card {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  transition: 1s;
}
.card:hover {
  box-shadow: 0px 10px 10px #555;
}
.infoline {
  width: 100%;
  height: 80px;
}
.time {
  height: 60px;
  width: 60px;
  background: #50bfff;
  padding: 8px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  float: left;
}
.detail {
  float: left;
  width: 320px;
  height: 60px;
  /* background: #50bfff; */
  margin-left: 13px;
}
.title {
  height: 50%;
  width: 100%;
  border-bottom: 1px solid #999;
  column-count: 1;
  overflow: hidden;
  line-height: 100%;
  cursor: pointer;
}
.title:hover {
  color: #50bfff;
}
.infos li {
  float: left;
  font-size: 12px;
  box-sizing: border-box;
  padding-top: 12px;
  margin-left: 19px;
}
.infos {
  height: 50%;
  line-height: 100%;
}
.content {
  text-align: left;
  /* padding-top: 22px; */
  padding-top: 15px;
  box-sizing: border-box;
  font-size: 15px;
  text-indent: 30px;
  line-height: 25px;
  overflow: hidden;
  max-height: 160px;
  display: block;
  width: 100%;
}
.content p {
  text-align: center;
}
.footer {
  width: 100%;
  height: 30px;
  position: absolute;
  top: 100%;
  left: 0;
  /* background: #50bfff; */
  border-top: 1px solid #50bfff;
  transform: translate(0, -100%);
  color: #999;
}

.category {
  float: left;
  line-height: 30px;
  margin-left: 10px;
}
.more {
  float: right;
  line-height: 30px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
}
.more-panel {
  position: absolute;
  right: -5px;
  top: -60px;
  width: 60px;
  height: 60px;
  /* background: #50bfff; */
}
.more-panel li {
  width: 60px;
  height: 30px;
  color: #334;
  position: relative;
  /* z-index: 10000000000!important; */
}
.more-panel li:before {
  content: "";
  width: 100%;
  height: 2px;
  background: #369;
  position: absolute;
  transition: 0.5s;
  left: 0;
  top: 0;
  opacity: 0.5;
}
.more-panel li:hover:before {
  content: "";
  width: 2px;
  height: 100%;
  background: #369;
  position: absolute;
  left: 0;
  top: 0;
}
.more-panel li:after {
  content: "";
  width: 100%;
  height: 2px;
  background: #369;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 0.5s;
  opacity: 0.5;
}
.more-panel li:hover:after {
  content: "";
  height: 100%;
  width: 2px;
  background: #369;
  position: absolute;
  right: 0;
  left: 60px;
  top: 0;
}
.more-panel li:hover {
  color: #668;
  /* z-index: 10000000000!important; */
}
.more-panel:before {
  content: "";
  position: absolute;
  background: #000;
  opacity: 0.5;
  width: 60px;
  height: 30px;
  left: 0px;
  bottom: -30px;
}
.more-panel ul {
  width: 60px;
  /* height:0px; */
  transform: scaleY(0);
  transition: 0.5s;
  transform-origin: bottom;
}
.show {
  transform: scaleY(1) !important;
}
</style>
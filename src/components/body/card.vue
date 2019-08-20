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
        <div class="more" @click="more()">
          更多
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["aid", "time", "content","type", "title"],
  data() {
    return {
      mapDtype: {
        1: "前端",
        2: "后端",
        3: "想法",
        4: "机器学习"
      }
    };
  },
  components: {},
  methods: {
    showit() {
      this.$router.push("/showartical/"+this.aid);
      window.console.log(this.type)
    },
    more(){
      this.$router.push("/editor/"+this.aid);
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
}
</style>
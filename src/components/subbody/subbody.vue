<template>
  <div>
    <h2 class="title">{{ className }}</h2>
    <div class="articles">
      <v-main-list :items="items"></v-main-list>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import mainList from "../body/mainList";
export default {
  name: "subbody",
  data() {
    return {
      className: "sadf",
      items: [],
      mapDtype: {},
      map: {
        "前端":1,
        "后端":2,
      }
    };
  },
  methods: {
    getTaget() {
      let that = this;
      // window.console.log("post");
      axios({
        method: "post",
        url: "/get/tags"
      }).then(function(res) {
        // that.mapDtype = res.data
        for (let i in res.data) {
          that.mapDtype[i] = res.data[i];
        }
        for (let i in res.data) {
          that.map[res.data[i]] = i;
        }
        that.className = that.$route.params.title;
        axios({
          method: "post",
          url: "/get/sub-body",
          data: {
            type: that.map[that.$route.params.title]
          }
        }).then(res => {
          window.console.log(res.data);
          let items = res.data;
          for (let i = 0; i < items.length; i++) {
            that.items.push(items[i]);
          }
        });
      });
    }
  },
  watch: {
    $route(to, from) {
      window.console.log(to, from);
      this.className = this.$route.params.title;
      axios({
        method: "post",
        url: "/get/sub-body",
        data: {
          type: this.map[this.$route.params.title]
        }
      }).then(res => {
        window.console.log(res.data);
        let items = res.data;
        this.items = [];
        for (let i = 0; i < items.length; i++) {
          this.items.push(items[i]);
        }
      });
    }
  },
  components: {
    "v-main-list": mainList
  },
  mounted() {
    //    window.console.log(this.$route)
    this.getTaget();
  }
};
</script>

<style scoped>
.title {
  font-size: 40px;
  letter-spacing: 40px;
  text-align: center;
  margin-top: 81px;
  box-sizing: border-box;
}
.articles {
  width: 80%;
  height: 80px;
  margin: 30px auto;
  /* background: #333; */
}
</style>
<template>
  <div>
    <input v-model="url" type="text" />
    <div>res:{{ response }}</div>
    <button @click="getResponse()">getResponse</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "test",
  data() {
    return {
      url: "/api/initIndex",
      response: "sdafs"
    };
  },
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
    }
  },
  mounted(){
    window.console.log(this.$route)
  }
};
</script>

<style scoped>
</style>
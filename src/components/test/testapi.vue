<template>
  <div>
    <input v-model="url" type="text" />
    <div>{{ response }}</div>
    <button @click="getResponse()">getResponse</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "test",
  data() {
    return {
      url: "",
      response: "sdafs"
    };
  },
  methods: {
    getResponse: function() {
      let a = axios.create({
        baseURL: "/api/parts",
        timeout: 1000,
        dataType:"jsonp"
      });
      a.get().then(res=>{
          window.console.log(res)
      }).catch(res=>{
          window.console.log(res)
      })
    }
  }
};
</script>

<style scoped>
</style>
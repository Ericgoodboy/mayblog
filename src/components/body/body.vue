<template>
    <div>
        <v-body-left :items="items" :top="top"></v-body-left>
        <v-body-right :hotarticals="hotarticals"></v-body-right>
    </div>
</template>

<script>
    import axios from "axios"
    import body_left from "./body_left"
    import body_right from "./body_right"
    export default {
        name:"v-body",
        data(){
            return {
                items:[],
                top:[],
                hotarticals:[]
            }
        },
        components:{
            "v-body-left":body_left,
            "v-body-right":body_right
        },
        mounted(){
           axios({
               'method':"get",
               url:'/get/items'
           }).then(res=>{
                window.console.log(res.data)
                let items = res.data;
                for(let i=0;i<items.length;i++){
                    this.items.push(items[i])
                }
           }) 
           axios({
               'method':"get",
               url:'/get/hotarticals'
           }).then(res=>{
                window.console.log(res.data)
                let hotarticals = res.data;
                for(let i=0;i<hotarticals.length;i++){
                    this.hotarticals.push(hotarticals[i])
                }
           }) 
           axios({
               'method':"get",
               url:'/get/toping'
           }).then(res=>{
                // window.console.log("top",res.data)
                let toping = res.data;
                for(let i=0;i<toping.length;i++){
                    this.top.push(toping[i])
                }
           })
        }
    }
</script>

<style  scoped>

</style>
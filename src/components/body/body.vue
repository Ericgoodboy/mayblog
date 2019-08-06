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
        name:"body",
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
               url:'/api/initindex'
           }).then(res=>{
                window.console.log(res.data)
                let items = res.data.items;
                let top = res.data.toping;
                let hotarticals = res.data.hotarticals;
                for(let i=0;i<items.length;i++){
                    this.items.push(items[i])
                }
                for (let i=0;i<top.length;i++){
                    this.top.push(top[i])
                }
                for (let i=0;i<hotarticals.length;i++){
                    this.hotarticals.push(hotarticals[i])
                }
           }) 
        }
    }
</script>

<style  scoped>

</style>
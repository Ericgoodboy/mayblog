<template>
    <div>
        <h2 class="title">{{ className }}</h2>
        <div class="articles">
            <v-main-list :items ="items"></v-main-list>
        </div>
    </div>
</template>

<script>
    const map={
        fontend:"前端",
        backend:"后端",
        thinking:'想法',
        ml:'机器学习'
    }
    import axios from "axios"
    import mainList from '../body/mainList'
    export default {
        name:"subbody",
        data(){
            return {
                className:"sadf",
                items:[]
            }
        },
        watch:
        {
            $route(to, from){
                window.console.log(to,from)
                 this.className = map[this.$route.params.title]
           axios({
               'method':"get",
               url:'/get/sub-'+this.$route.params.title
           }).then(res=>{
                window.console.log(res.data)
                let items = res.data;
                 this.items = []
                for(let i=0;i<items.length;i++){
                    this.items.push(items[i])
                }
           }) 
            }
        }
        ,
        components:{
            "v-main-list":mainList
        },
        mounted(){
        //    window.console.log(this.$route)
           this.className = map[this.$route.params.title]
           
           axios({
               'method':"get",
               url:'/get/sub-'+this.$route.params.title
           }).then(res=>{
                window.console.log(res.data)
                let items = res.data;
                for(let i=0;i<items.length;i++){
                    this.items.push(items[i])
                }
           }) 
        }
    }
</script>

<style scoped>
    .title{
        font-size: 30px;
        letter-spacing: 12px;
    }
    .articles{
        width: 80%;
        height: 80px;
        margin: 30px auto;
        /* background: #333; */
    }
</style>
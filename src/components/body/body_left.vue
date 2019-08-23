<template>
    <div class="left">
        <v-top :top="top"></v-top>
        <v-main-list @changetop = "changetop" :items ="items"></v-main-list>
    </div>
</template>

<script>
    import top from './top'
    import mainList from './mainList'
    export default {
        name:"body_left",
        props:["items","top"],
        components:{
            "v-top":top,
            "v-main-list":mainList
        },
        methods:{
            changetop(data){
                window.console.log(data)
                let count = 0;
                for(let i=0;i<this.top;i++ ){
                    if(this.top[i].aid==data.aid){
                        count+=1;
                    }
                }
                if(count==0){
                    this.top.push(data)
                }
            }
        }
        ,
        
    }
</script>

<style  scoped>
.left{
    width: 70%;
    padding-left:70px;
    float: left;
}
</style>
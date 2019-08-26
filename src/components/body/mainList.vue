<template>
    <div class="main-body clearfix">
        <ul>
            <li v-for="item in items" :key="item.id">
                <v-card @changeTop="changetop" :type="item.type" :aid="item.id" :time="item.publishDate" :title="item.title" :content="item.desc" ></v-card>
            </li>
        </ul>
    </div>
</template>

<script>
    import card from './card'
    export default {
        name:"mainbody",
        props:["items"],
        components:{
            "v-card":card
        },
        methods:{
            changetop(data){
                this.$emit("changetop",data)
            }
        }
    }
</script>

<style  scoped>
.main-body{
    /* height:1000px; */
    width: 100%;
    /* background: linear-gradient(#999,#ccc) */
}
ul{
    width: 100%;
    padding-top: 15px;
    margin-bottom: 80px;
}
li{
    width: 50%;
    height: 300px;
    margin-left: 0px;
    float: left;
    margin-top:12px;
    list-style: none;
}
</style>
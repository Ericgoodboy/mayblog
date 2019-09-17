<template>
    <div class="v-tags fa fa-hand-o-up">
        <div class="taglist">
            <ul>
                <li v-for="item in taglist" :key="item.tid">
                    <router-link :to="'/subbody/'+item.title">{{ item.title }} :{{item.c}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:"v-tags",
        data(){
            return{
                taglist:[
                    
                ]
            }
        },
        methods: {
            getTarget() {
                let that  = this;
                axios({
                    url:"/get/tagsinfo",
                    method:"post"
                }).then(function(res){
                    for(let i in res.data){
                        // window.console.log(res.data[i])
                         that.taglist.push(res.data[i])
                    }
                    
                })
            }
        },
        mounted () {
            this.getTarget();
        },
    }
</script>

<style scoped>
    ul{
        padding: 0;
        border:0;
        margin: 0%;
        list-style: none;
    }
    li{
        padding: 0;
        border:0;
        margin: 0;
        list-style: none;
    }
    .v-tags{
        position: fixed;
        left:40px;
        top:-0px;
        z-index: 102;
        width: 80px;
        transform: translateY(-100%);
        background: #3334;
        border:1px solid #aaa;
        min-height: 120px;
        box-sizing: border-box;
        transition: .3s;
        transition-timing-function: linear
    }
    .v-tags ul{
        text-align: center;
        width: 100%;
        margin-top: 12px;

    }
    .v-tags:hover{
        transform: translateY(0);
    }
    .v-tags:before{
        position: absolute;
        bottom: -30px;
        left: 50%;
        height: 30px;
        width:30px;
        font-size: 20px;
        line-height: 30px;
        background: #3334;
        transform: translate(-50%,0);
        text-align:center;
        border-radius: 0 0 50% 50%
    }
    .v-tags li{
        max-width:80%;
        border:1px solid #888;
        margin: 3px auto;
        line-height: 18px;
        font-size: 12px;
        padding: 0% 3px;
        text-decoration: none !important;
        text-decoration-line: none;
        border-radius: 50%;
        transform-origin: center;
        transition: .3s;
    }
    .v-tags li a{
        text-decoration: none !important;
        text-decoration-line: none;
        color: aqua;
    }
    .v-tags li:hover{
        transform: scale(1.2);
        border:1px solid #eee
    }
</style>
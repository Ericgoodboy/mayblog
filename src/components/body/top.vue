<template>
    <div class="top">
        <ul>
            <li v-for="item in top" :key="item.id">
                <div class="wraper">
                    <div class="icon">
                        置顶
                    </div>
                    <router-link  :to="'/showartical/'+item.aid">
                        {{ item.title }}
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "top",
        props:["top"]
    }
</script>

<style  scoped>
    .top{
        margin-top:80px;
        text-align: left
    }
    li{
        height:45px;
        display: block;
        /* margin-top: 20px; */
        margin-bottom: 0;
        padding: 0%;
        margin-top: 0px;
    }
    .icon{
        width: 70px;
        height: 35px;
        background: #f33;
        display: block;
        line-height: 35px;
        text-align: center;
        position: relative;
        float: left;
    }
    .wraper a{
        height: 35px;
        line-height: 30px;
        text-decoration: none;
        color: #333;
        margin-left: 50px;
    }
    .icon:before{
        content: "";
        position: absolute;
        left: 0;
        top:0;
        height: 100%;
        width: 100%;
        background: rgba(255, 255, 255, .3);
        overflow: hidden;
        
    }
    .icon:hover:before{
        animation: iconMove 1.3s infinite;
    }
    @keyframes iconMove {
        0%{
            left: 0;
            
        }
        25%{
            left: 50%;
            transform: scaleX(0);
            
        }
        50%{
            left: 0;
            transform: scaleX(1)
        }
        75%{
            left: -50%;
            transform: scaleX(0)
        }
        100%{
            left: 0;
            transform: scaleX(1);
        }
    }
    .wraper{
        width: 100%;
        height: 35px;
        background: #bbb;
        border-radius: 0 3px 3px 0px;
        padding: 0%;
    }
    
</style>
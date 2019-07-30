<template>
    <div class="top">
        <ul>
            <li>
                <div class="wraper">
                    <div class="icon">
                        置顶
                    </div>
                </div>
            </li>
            <li>
                <div class="wraper">
                    <div class="icon">
                        置顶
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "top"
    }
</script>

<style  scoped>
    .top{
        margin-top:20px;
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
        text-align: center
    }
    .wraper{
        width: 100%;
        height: 35px;
        background: #bbb;
        border-radius: 0 3px 3px 0px;
        padding: 0%;
    }
    
</style>
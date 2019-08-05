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
        text-align: center;
        position: relative;
        
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
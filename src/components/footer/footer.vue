<template>
    <div class="v-footer">
        <div class="footer-text">
            Ericgoodboy@github.io
        </div>
    </div>
</template>

<script>
    export default {
        name:"v-footer"
    }
</script>

<style scoped>
    .v-footer{
        /* position: absolute;
        bottom:-50px; */
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        width: 100%;
        text-align: center;
        margin-top:12px;
        /* background: #fafafa; */
        cursor: pointer;
    }
    .footer-text{
        position: fixed;
        height: 40px;
        width:100%;
        bottom: 0px;
        left: 0px;
        background: #fafafa
    }
</style>
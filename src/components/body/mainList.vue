<template>
    <div class="main-body clearfix">
        <ul>
            <li>
                <v-card></v-card>
            </li>
            <li>
                <v-card></v-card>
            </li>
            <li>
                <v-card></v-card>
            </li>
            <li>
                <v-card></v-card>
            </li>
            <li>
                <v-card></v-card>
            </li>
            <li>
                <v-card></v-card>
            </li>
            <li>
                <v-card></v-card>
            </li>
        </ul>
    </div>
</template>

<script>
    import card from './card'
    export default {
        name:"mainbody",
        components:{
            "v-card":card
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
}
</style>
<template>
    <div class="left">
        <v-top></v-top>
        <v-main-list></v-main-list>
    </div>
</template>

<script>
    import top from './top'
    import mainList from './mainList'
    export default {
        name:"body_left",
        components:{
            "v-top":top,
            "v-main-list":mainList
        }
    }
</script>

<style  scoped>
.left{
    width: 70%;
    padding-left:70px;
}
</style>
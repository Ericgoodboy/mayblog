<template>
    <div>
        <v-body-left></v-body-left>
        <v-body-right></v-body-right>
    </div>
</template>

<script>
    import body_left from "./body_left"
    import body_right from "./body_right"
    export default {
        name:"body",
        components:{
            "v-body-left":body_left,
            "v-body-right":body_right
        }
    }
</script>

<style  scoped>

</style>
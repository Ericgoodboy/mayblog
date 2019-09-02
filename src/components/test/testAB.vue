<template>
    <div>
    <div @mouseenter="change('a','b')" @mouseleave="change('b','a')" class="ab">
        <div class="a" :class="a"></div>
        <div class="b" :class="b"></div>
    </div>
    </div>
</template>

<script>
    export default {
        name:'testAB',
        data(){
            return{
                a:"",
                b:""
            }
        },
        methods:{
            change(from,to){
                this[from]="np"
                this[to]='ap'
            }
        }
    }
</script>

<style scoped>
.ab{
    height: 300px;
    width: 300px;
    position: relative;
}
.ab div{
    width: 100%;
    height: 100%;
    
}
.a{
    background: #333;
    transform-origin: center;
    /* transition-duration: 3s; */
    position: absolute;
}
.b{
    background: #369;
    transform-origin: center;
    /* transition-duration: 3s; */
    position: absolute;
     transform: rotateY(90deg);
}
.np{
    transform: rotateY(90deg);
    animation: anp linear 1s;
}
.ap{
    transform: rotateY(0deg);
    animation: aap linear 1s;
}
@keyframes anp {
    0%{
        transform: rotateY(0deg);
    }
    50%{
        transform: rotateY(90deg);
    }
    100%{
        transform: rotateY(90deg);
    }
}
@keyframes aap {
    0%{
        transform: rotateY(270deg);
    }
    50%{
        transform: rotateY(270deg);
    }
    100%{
        transform: rotateY(360deg);
    }
}


</style>
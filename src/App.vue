<template>
  <div id="app">
    <v-header></v-header>
    <!-- <v-crumbs></v-crumbs> -->
    <!-- <editor></editor> -->
    <!-- <v-body></v-body> -->
    <!-- <v-test></v-test> -->
    <transition class="trans" name="bounce">
      <router-view class="clearfix"></router-view>
    </transition>
    <v-footer></v-footer>
  </div>
</template>

<script>
// import axios from "axios"
import header from "./components/header/header";
// import crumbs from "./components/crumbs/crumbs";
// import body from './components/body/body'
// import editor from './components/editor/editor'
import test from './components/footer/footer'
export default {
  name: "app",
  components: {
    "v-header": header,
    // "v-crumbs": crumbs
    // "v-body":body,
    // editor,
    "v-footer":test,
  },
  mounted(){
  }
};
</script>

<style>
router-view{
  min-height: 1400px;
  width: auto;
}
.bounce-enter-active {
  animation: to-in 1.2s;
  position: absolute;
  width: 100%;
  height:95%;
  overflow: hidden;
  transform-origin: center;
  top:-00px;
}
.bounce-leave-active {
  animation: to-out 1.2s;
  position: absolute;
   width: 100%;
  height:95%;
  overflow: hidden;
  transform-origin: center;
  top:-0px;
}
@keyframes to-out {
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
@keyframes to-in {
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
@keyframes bounce-in {
  0% {
    transform: scaleX(0);
    /* opacity: 0; */
  }
  /* 50% {
    transform: scaleY(1.5);
    opacity: .2
  } */
  100% {
    transform: scaleX(1);
    /* opacity: 1 */
  }
}
@keyframes bounce-out {
  0% {
    transform: scaleX(1);
    /* opacity: 0; */
  }
  /* 50% {
    transform: scaleY(1.5);
    opacity: .2
  } */
  100% {
    transform: scaleX(0);
    /* opacsty: 1 */
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
/* html,
body,
div,
span,
applet,
object,
iframe,

blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}*/

/* HTML5 display-role reset for older browsers */
/*
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
} */
</style>

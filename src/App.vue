<template>
  <div id="app">
    <v-header></v-header>
    <!-- <v-crumbs></v-crumbs> -->
    <!-- <editor></editor> -->
    <!-- <v-body></v-body> -->
    <!-- <v-test></v-test> -->
    <transition class="trans" name="bounce">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import axios from "axios"
import header from "./components/header/header";
// import crumbs from "./components/crumbs/crumbs";
// import body from './components/body/body'
// import editor from './components/editor/editor'
// import test from './components/test/testapi'
export default {
  name: "app",
  components: {
    "v-header": header,
    // "v-crumbs": crumbs
    // "v-body":body,
    // editor,
    // "v-test":test,
  },
  mounted(){
  }
};
</script>

<style>

.bounce-enter-active {
  animation: bounce-in 2s;
  position: absolute;
  width: 100%;
  height:95%;
  overflow: hidden;
  transform-origin: left;
  top:-00px;
}
.bounce-leave-active {
  animation: bounce-out 2s;
  position: absolute;
   width: 100%;
  height:95%;
  overflow: hidden;
  transform-origin: right;
  top:-0px;

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

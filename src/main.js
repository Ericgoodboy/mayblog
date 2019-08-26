import Vue from 'vue'
import App from './App.vue'
import './assets/lib/markdown.css';
// import './assets/lib/darkula.css';
import './assets/lib/clearfix.css';
import './assets/lib/md1.css';
import './assets/lib/css/font-awesome.css'
import body from './components/body/body'
import test from './components/test/testapi'
import editor from './components/editor/editor'
import mavonEditor from 'mavon-editor'
import subbody from './components/subbody/subbody'
import userData from './user/user'
import showAritcals from './components/showartical/showarticals'
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(mavonEditor)
import 'mavon-editor/dist/css/index.css'

Vue.prototype.userData = userData
const routes = [
  {path:"/",component:body},
  {path:"/test",component:test},
  {path:"/editor/:id",component:editor},
  {path:"/subbody/:title",component:subbody},
  {path:'/showartical/:id',component:showAritcals}
]
import toastRegistry from './toast/index'
Vue.use(toastRegistry)
const router =new VueRouter({
  // mode:"history",
  routes})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// new Vue({
//   router,
//   components:{
//     App
//   }
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './assets/lib/resert.css';
import './assets/lib/clearfix.css';
import './assets/lib/css/font-awesome.css'
import body from './components/body/body'
import test from './components/test/testapi'
import editor from './components/editor/editor'
import subbody from './components/subbody/subbody'
import userData from './user/user'
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.prototype.userData = userData
const routes = [
  {path:"/",component:body},
  {path:"/test",component:test},
  {path:"/editor/:id",component:editor},
  {path:"/subbody/:title",component:subbody}
]
import toastRegistry from './toast/index'
Vue.use(toastRegistry)
const router =new VueRouter({routes})
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

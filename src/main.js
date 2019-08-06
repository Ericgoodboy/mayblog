import Vue from 'vue'
import App from './App.vue'
import './assets/lib/resert.css';
import './assets/lib/clearfix.css';
import './assets/lib/css/font-awesome.css'
import body from './components/body/body'
import test from './components/test/testapi'
import editor from './components/editor/editor'
import subbody from './components/subbody/subbody'
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {path:"/",component:body},
  {path:"/test",component:test},
  {path:"/editor",component:editor},
  {path:"/subbody/:title",component:subbody}
]
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

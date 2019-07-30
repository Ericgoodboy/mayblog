import Vue from 'vue'
import App from './App.vue'
import './assets/lib/resert.css';
import './assets/lib/clearfix.css';
import './assets/lib/css/font-awesome.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

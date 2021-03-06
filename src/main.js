import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//import Axios from "./components/util/diyaxios"
Vue.config.productionTip = false;
//Vue.prototype.$http = Axios;
//console.log(Vue.version);
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

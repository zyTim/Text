// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'

// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import { Icon } from 'vant';
Vue.use(Icon);

// 全局引入axios
import axios from "./api"
Vue.prototype.axios=axios;
Vue.config.productionTip = false

import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    isShowRouterLink:true,
    userInfo:{}
  },
  router,
  store,
  // components: { App },
  components:{
    'App':()=> import ('./App')
  },
  template: '<App/>'
})

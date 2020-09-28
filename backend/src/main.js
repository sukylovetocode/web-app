import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 请求拦截
import '@/assets/js/axios.interceptors';
import Plugins from '@/views/pages/pageEditor/plugins/index';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Plugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

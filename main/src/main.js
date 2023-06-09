import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun'
import { microAppConfig } from '@/config/register'
import Cache from '@/util/globalMethods'

Vue.config.productionTip = false
registerMicroApps(microAppConfig);
start();
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
let cache = new Cache()
Vue.prototype.Cache = cache
window.globalMethods = cache

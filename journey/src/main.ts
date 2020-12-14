import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css';
import ViewUI from 'view-design';

Vue.config.productionTip = false
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

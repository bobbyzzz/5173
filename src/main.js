import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Vant from 'vant';
import router from './routers/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.use(iView); 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia, PiniaVuePlugin } from 'pinia'
import Cloudinary from 'cloudinary-vue';

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()


Vue.use(Cloudinary, {
  configuration: {
    cloudName: "dypujlrm2"
  }
});

new Vue({
  router,
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')

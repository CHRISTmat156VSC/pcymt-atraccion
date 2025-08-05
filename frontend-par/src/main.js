import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';          // CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';    // JS de Bootstrap (con Popper)
import 'bootstrap-icons/font/bootstrap-icons.css';     // Íconos de Bootstrap (¡Nueva línea!)

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^v-/] // Mitiga el riesgo

new Vue({
  render: h => h(App),
}).$mount('#app');

// En main.js



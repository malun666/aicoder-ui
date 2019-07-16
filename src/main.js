import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AIcoder from "./index";

Vue.use(AIcoder);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

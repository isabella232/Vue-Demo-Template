import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import InstantSearch from "vue-instantsearch";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPalette);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(InstantSearch);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

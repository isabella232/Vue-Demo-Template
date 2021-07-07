import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import HeaderModule from "./modules/header.store";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    HeaderModule,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

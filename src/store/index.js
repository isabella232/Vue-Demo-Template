import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import HeaderModule from "./modules/header.store";
import PersonnaModule from "./modules/personna.store";
import SearchModule from "./modules/search.store";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    HeaderModule,
    PersonnaModule,
    SearchModule,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

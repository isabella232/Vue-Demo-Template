<template>
  <div>
    <ais-instant-search
      :search-client="searchClient"
      index-name="rayban_merged"
    >
      <Header @showFederatedSearch="showFederatedSearchMethod" />
      <HomePage v-if="!getCatOne && !getCatTwo" />
      <CatOne v-if="getCatOne" />
      <CatTwo v-if="getCatTwo" />
      <Modal v-if="getShowModal" />
    </ais-instant-search>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomePage from "@/components/HomePage";
import Modal from "@/components/Modal";
import CatOne from "@/components/CatOne";
import CatTwo from "@/components/CatTwo";
import { mapGetters } from "vuex";
import algoliasearch from "algoliasearch/lite";

export default {
  components: {
    Header,
    HomePage,
    Modal,
    CatOne,
    CatTwo,
  },
  data() {
    return {
      showFederatedSearch: true,
      searchClient: algoliasearch(
        "JDBD6EJM33",
        "0fe54b2e3991d370c91376981aff9d48"
      ),
    };
  },
  methods: {
    showFederatedSearchMethod(value) {
      this.showFederatedSearch = value;
    },
  },
  computed: {
    ...mapGetters("HeaderModule", [
      "getShowFederatedSearch",
      "getShowModal",
      "getCatTwo",
      "getCatOne",
    ]),
  },
};
</script>

<style></style>

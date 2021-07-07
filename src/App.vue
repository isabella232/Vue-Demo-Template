<template>
  <div>
    <ais-instant-search
      :search-client="searchClient"
      index-name="rayban_merged"
    >
      <Header @showFederatedSearch="showFederatedSearchMethod" />
      <HomePage v-if="!getShowFederatedSearch" />
      <SearchPage v-else />
    </ais-instant-search>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomePage from "@/components/HomePage";
import SearchPage from "@/components/SearchPage";
import { mapGetters } from "vuex";
import algoliasearch from "algoliasearch/lite";

export default {
  components: {
    Header,
    HomePage,
    SearchPage,
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
      console.log("VALUe", value);
      this.showFederatedSearch = value;
    },
  },
  computed: {
    ...mapGetters("HeaderModule", ["getShowFederatedSearch"]),
  },
};
</script>

<style></style>

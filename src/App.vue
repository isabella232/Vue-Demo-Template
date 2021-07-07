<template>
  <!-- <ais-instant-search :search-client="searchClient" index-name="rayban_merged">
    <ais-search-box />
    <ais-hits>
      <div slot="item" slot-scope="{ item }">
        <h2>{{ item.title }}</h2>
      </div>
    </ais-hits>
  </ais-instant-search> -->
  <div>
    <Header @showFederatedSearch="showFederatedSearchMethod" />
    <HomePage v-if="!getShowFederatedSearch" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomePage from "@/components/HomePage";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    HomePage,
  },
  data() {
    return {
      showFederatedSearch: true,
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

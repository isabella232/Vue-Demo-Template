<template>
  <div class="search-page">
    <div class="filterBtn" @click="showFiltersMethod()">
      <p>Navigation & Filters</p>
      <div>
        <p v-if="!showFilters">-</p>
        <p v-else>+</p>
      </div>
    </div>
    <div class="hits-page">
      <Filters :showFilter="showFilter" />
      <div class="hits-wrapper">
        <div class="sort-and-stat">
          <ais-stats />
          <ais-configure
            filters="FRAMEMATERIAL:Metal"
            :userToken="userToken()"
          />
          <ais-sort-by
            :items="[
              {
                value: 'rayban_merged',
                label: 'Relevancy',
              },
              {
                value: 'rayban_merged_price_dsc',
                label: 'Price Desc',
              },
              {
                value: 'rayban_merged_price_asc',
                label: 'Price Asc.',
              },
            ]"
          />
        </div>
        <ais-hits>
          <div class="hits-wrapper" slot="item" slot-scope="{ item }">
            <div class="image-wrapper">
              <img :src="item.image_link" alt="" />
            </div>
            <div class="infos">
              <ais-highlight attribute="title" :hit="item" />
            </div>
          </div>
        </ais-hits>
        <ais-pagination />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import { mapGetters } from "vuex";
export default {
  name: "catTwo",
  data() {
    return {
      showFilter: true,
    };
  },
  components: {
    Filters,
  },
  methods: {
    showFiltersMethod() {
      this.showFilter = !this.showFilter;
    },
    userToken() {
      if (this.getPersonnaSelected == "Ben") {
        return "RB_Ben";
      }
      if (this.getPersonnaSelected == "Tiffany") {
        return "RB_Tiffany";
      }
      if (this.getPersonnaSelected == "Neutral") {
        return "Neutral";
      }
    },
  },
  computed: {
    ...mapGetters("PersonnaModule", ["getPersonnaSelected"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/variables.scss";
@import "@/assets/scss/mixin.scss";

.search-page {
  width: 90%;
  margin: 0 auto;
  .hits-page {
    display: flex;
    width: 90%;
    margin: 0 auto;
    .hits-wrapper {
      .sort-and-stat {
        padding: 0 5em;
      }
    }
  }
  .search {
    width: 80%;
    margin: 0 auto;
  }
  .filterBtn {
    width: 10%;
    margin: 0 0 0 5.4em;
    display: -webkit-flex;
    display: flex;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    justify-content: space-between;
  }
}
</style>

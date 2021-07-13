<template>
  <div class="search-page">
    <SearchBox class="search" />
    <div class="hits-page">
      <Filters />
      <div class="hits-wrapper">
        <div class="sort-and-stat">
          <ais-stats />
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
import SearchBox from "@/components/SearchBox";
export default {
  name: "catOne",
  components: {
    Filters,
    SearchBox,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/variables.scss";
@import "@/assets/scss/mixin.scss";

.search-page {
  width: 100%;
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
}
</style>

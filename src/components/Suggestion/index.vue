<template>
  <div class="suggestion">
    <div class="title">
      <h1>Suggestion</h1>
    </div>
    <div class="content">
      <!-- <ais-index index-name="rayban_merged_query_suggestions"> -->
      <ais-refinement-list :limit="6" attribute="title" searchable show-more>
        <div slot-scope="{ items, isFromSearch, refine, createURL }">
          <ul>
            <li v-if="isFromSearch && !items.length">No results.</li>
            <li v-for="item in items" :key="item.value">
              <a
                :href="createURL(item)"
                :style="{
                  fontWeight: item.isRefined ? 'bold' : '',
                }"
                @click.prevent="refine(item.value), modifQuery(item.value)"
              >
                <ais-highlight attribute="item" :hit="item" />
              </a>
            </li>
          </ul>
        </div>
      </ais-refinement-list>
      <!-- </ais-index> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Suggestion",
  methods: { ...mapActions("SearchModule", ["modifQuery"]) },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/variables.scss";
.suggestion {
  padding: 0 1.2em;
  width: 70%;
  .content {
    border: none;
    height: 20%;
    margin: 2em 0;
    li {
      border: none;
      padding: 0;
      margin: 1rem 0;
    }
  }
}
</style>

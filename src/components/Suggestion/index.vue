<template>
  <div class="suggestion">
    <div class="title">
      <h1>Suggestion</h1>
    </div>
    <div class="content">
      <ais-index index-name="rayban_merged_query_suggestions">
        <ais-refinement-list attribute="title" searchable show-more>
          <div slot-scope="{ items, isFromSearch, refine, createURL }">
            <ul>
              <li v-if="isFromSearch && !items.length">No results.</li>
              <li v-for="item in items" :key="item.value">
                <a
                  :href="createURL(item)"
                  :style="{
                    fontWeight: item.isRefined ? 'bold' : '',
                  }"
                  @click.prevent="refine(item.value), emitMethod(item.value)"
                >
                  <ais-highlight attribute="item" :hit="item" />
                </a>
              </li>
            </ul>
          </div>
        </ais-refinement-list>
      </ais-index>
    </div>
  </div>
</template>

<script>
export default {
  name: "Suggestion",
  methods: {
    emitMethod(value) {
      this.$emit("suggestion", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/variables.scss";
.suggestion {
  padding: 0 1.2em;
  width: 70%;
  .content {
    border-right: 1px solid #f2f2f2;
    height: 20%;
    margin: 2em 0;
  }
}
</style>

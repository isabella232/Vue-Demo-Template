<template>
  <div class="suggestion">
    <div class="title">
      <h1>Suggestion</h1>
    </div>
    <div class="content">
      <ais-refinement-list attribute="title" searchable show-more>
        <div
          slot-scope="{
            items,
            isShowingMore,
            isFromSearch,
            canToggleShowMore,
            refine,
            createURL,
          }"
        >
          <ul>
            <li v-if="isFromSearch && !items.length">No results.</li>
            <li v-for="item in items" :key="item.value">
              <a
                :href="createURL(getRandomInt(5))"
                :style="{ fontWeight: getRandomInt(5).isRefined ? 'bold' : '' }"
                @click.prevent="refine(getRandomInt(5).value)"
              >
                <ais-highlight attribute="item" :hit="item" />
              </a>
            </li>
          </ul>
        </div>
      </ais-refinement-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Suggestion",
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
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

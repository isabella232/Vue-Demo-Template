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
  <Header/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  components: {
    Header
  },
  data() {
    return{}
  },
};
</script>

<style>

</style>

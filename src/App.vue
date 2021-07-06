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
  <HomePage/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import HomePage from "@/components/HomePage"

export default {
  components: {
    Header,
    HomePage
  },
  data() {
    return{}
  },
};
</script>

<style>

</style>

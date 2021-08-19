<template>
  <div class="carousel-container">
    <h3>Recommandations</h3>
    <HitsCarouselReco />
    <h3>Bought together</h3>
    <ais-instant-search
      :search-client="searchClient"
      index-name="rayban_merged"
    >
      <ais-configure :hits-per-page.camel="7">
        <HitsCarouselBought />
      </ais-configure>
    </ais-instant-search>
  </div>
</template>

<script>
import HitsCarouselReco from "@/components/HitsCarouselReco";
import HitsCarouselBought from "@/components/HitsCarouselBought";
import algoliasearch from "algoliasearch/lite";
export default {
  data() {
    return {
      searchClient: algoliasearch(
        "JDBD6EJM33",
        "0fe54b2e3991d370c91376981aff9d48"
      ),
    };
  },
  components: {
    HitsCarouselReco,
    HitsCarouselBought,
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 90%;
  margin: 5rem auto;
  h3 {
    font-family: "Oswald", sans-serif;
    color: #000;
    font-size: 2rem;
  }
}
</style>

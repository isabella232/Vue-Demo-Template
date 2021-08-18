<template>
  <div class="carousel-container">
    <h3>Our Iconic Aviator</h3>
    <ais-configure :hits-per-page.camel="7" ruleContexts="aviator" />
    <HitsCarouselHome />
  </div>
</template>

<script>
import HitsCarouselHome from "@/components/HitsCarouselHome";
export default {
  components: {
    HitsCarouselHome,
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

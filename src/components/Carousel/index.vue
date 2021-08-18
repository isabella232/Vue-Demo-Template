<template>
  <div class="carousel-container">
    <h3>Our Iconic Aviator</h3>
    <ais-configure :hits-per-page.camel="7" ruleContexts="aviator" />
    <HitsCarousel />
  </div>
</template>

<script>
import HitsCarousel from "@/components/HitsCarousel";
export default {
  components: {
    HitsCarousel,
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

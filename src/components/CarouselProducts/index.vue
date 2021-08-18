<template>
  <div class="carousel-container">
    <h3>Recommandations</h3>
    <HitsCarouselReco />
    <h3>Bought together</h3>
    <HitsCarouselBought />
  </div>
</template>

<script>
import HitsCarouselReco from "@/components/HitsCarouselReco";
import HitsCarouselBought from "@/components/HitsCarouselBought";
export default {
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

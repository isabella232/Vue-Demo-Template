<template>
  <div class="carousel-container">
    <ais-configure :hits-per-page.camel="8" />
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

<style></style>

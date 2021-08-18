<template>
  <div class="homepage-wrapper">
    <div>
      <img :src="headerBand" alt="home" />
    </div>
    <div>
      <video :src="rbVideo" autoPlay loop />
    </div>
    <CarouselHome />
    <div>
      <img :src="img1" alt="home" />
    </div>
    <div>
      <img :src="img2" alt="home" />
    </div>
    <div>
      <img :src="img3" alt="home" />
    </div>
    <div>
      <img :src="img4" alt="home" />
    </div>
    <div>
      <img :src="footer" alt="home" />
    </div>
  </div>
</template>

<script>
import headerBand from "@/assets/images/headerBand.png";
import rbVideo from "@/assets/Videos/rbVideo.webm";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";
import img4 from "@/assets/images/img4.png";
import footer from "@/assets/images/footer.png";
import CarouselHome from "@/components/CarouselHome";

export default {
  data() {
    return {
      headerBand,
      rbVideo,
      img1,
      img2,
      img3,
      img4,
      footer,
    };
  },
  components: {
    CarouselHome,
  },
};
</script>

<style lang="scss" scoped>
.homepage-wrapper {
  z-index: 0;
  position: absolute;
  img,
  video {
    width: 100%;
  }
}
</style>

<template>
  <div>
    <p class="close-modal" @click="closeModal">X</p>
    <div class="modal-detail">
      <div class="product-side">
        <div class="modal-images">
          <img :src="getProductDetails.image_link" alt="" />
        </div>
      </div>
      <div class="fake-filters">
        <div class="modal-infos">
          <h3>{{ getProductDetails.title }}</h3>
          <p>${{ getProductDetails.price }}</p>
          <p>{{ getProductDetails.description }}</p>
          <p class="btn-modal">Buy me</p>
        </div>
        <img :src="pdp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import pdp from "@/assets/images/pdp.png";

export default {
  data() {
    return {
      pdp,
    };
  },
  computed: {
    ...mapGetters("SearchModule", ["getProductDetails"]),
  },
  methods: {
    ...mapActions("SearchModule", ["closeModal"]),
  },
};
</script>

<style lang="scss" scoped>
.modal-detail {
  background-color: transparent;
  display: -webkit-flex;
  display: flex;
  padding: 2rem;
  width: 100%;
  border-radius: 3px;
  .product-side {
    margin: 0 auto;
    width: 80%;
    .modal-images {
      display: flex;
      align-items: center;
      width: 100%;
      img {
        width: 90%;
      }
    }
  }
  .fake-filters {
    width: 60%;
    .modal-infos {
      margin-top: 3rem;
      width: 80%;
      h3,
      p {
        margin: 1rem 0;
      }
      .btn-modal {
        border: 1px solid #e2e2e5;
        text-decoration: none;
        color: #1f1f24;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        margin: 0.5rem 0;
        padding: 0.8em;
        font-size: 0.8rem;
        background-color: white;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        width: 30%;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        align-items: center;
        margin-top: 3rem;
      }
    }
    img {
      width: 100%;
      object-fit: cover;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
}
.close-modal {
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
}
</style>

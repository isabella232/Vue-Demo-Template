<template>
  <div class="container-federated-search">
    <div class="federated-search">
      <div class="modal-content">
        <Suggestion />
        <SearchPage />
      </div>
    </div>
  </div>
</template>

<script>
import SearchPage from "@/components/SearchPage";
import Suggestion from "@/components/Suggestion";
export default {
  name: "Modal",
  components: {
    SearchPage,
    Suggestion,
  },
};
</script>

<style lang="scss" scoped>
.container-federated-search{
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    transform: translate(0%, 15%);
    width: 100%;
  .federated-search {
    width: 90vw;
    height: 80vh;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(14px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 2rem;
    margin: 3rem auto 0 auto;
    overflow-x: hidden;
    .modal-content {
      display: flex;
      justify-content: center;
    }
  }
}
</style>

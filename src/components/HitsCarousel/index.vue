<template>
  <ais-hits>
    <ul class="hits-list hits-list-modal" slot-scope="{ items }">
      <li class="hit-list" v-for="item in items" :key="item.objectID">
        <div class="image-wrapper">
          <img :src="item.image_link" alt="" />
        </div>
        <div class="infos">
          <ais-highlight class="title" :hit="item" attribute="title" />
        </div>
        <p>$ {{ item.price }}.00</p>
      </li>
    </ul>
  </ais-hits>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hits-list-modal {
  flex-wrap: nowrap;
  display: -webkit-box;
  overflow-x: scroll;
  padding: 1rem 0rem;
  list-style-type: none;
  li {
    width: 250px !important;
    .image-wrapper {
      width: 100%;
      img {
        width: 100%;
        background-image: #f2f2f2;
        object-fit: cover;
        object-position: center;
        position: relative;
      }
    }
    .infos {
      .title {
        font-size: 0.9rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-family: "Oswald", sans-serif;
        color: #000;
      }
    }
    p {
      font-size: 1rem;
      font-weight: 200;
    }
  }
}

.hits-list {
  justify-content: center;
  align-items: center;
  width: 100%;
  .hit-list {
    width: 30%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    border: #f2f2f2 solid 1px;
    margin: 0.2rem;
    padding: 1rem;
    cursor: pointer;
  }
}

ul {
  list-style: none;
  font-family: "Oswald", sans-serif;
  color: #000;
}
</style>

<template>
  <ais-hits>
    <ul class="hits-list hits-list-modal" slot-scope="{ items }">
      <li class="hit-list" v-for="item in items" :key="item.objectID">
        <div class="image-wrapper">
          <!-- <img :src="item.image_link" alt="" /> -->
        </div>
        <div class="infos">
            <ais-highlight :hit="item" attribute="title" />
        </div>
      </li>
    </ul>
  </ais-hits>
</template>

<script>
export default {};
</script>

<style></style>

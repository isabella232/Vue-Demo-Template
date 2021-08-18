<template>
  <transition name="fade">
    <div v-if="showFilter" class="filters">
      <div class="filterBtn" @click="showFiltersMethod()">
        <p>Navigation & Filters</p>
        <div>
          <p v-if="!showFilters">-</p>
          <p v-else>+</p>
        </div>
      </div>
      <div>
        <div class="filters-content">
          <div class="title" @click="showShapeMethod()">
            <h3>FRAME SHAPES</h3>
            <p>-</p>
          </div>
          <transition name="fade">
            <ais-refinement-list
              v-if="!showShapes"
              attribute="FrameShapeDescription"
              searchable
              show-more
            >
              <div slot-scope="{ items, isFromSearch, refine, createURL }">
                <ul>
                  <li v-if="isFromSearch && !items.length">No results.</li>
                  <li
                    v-for="item in items"
                    :key="item.value"
                    class="filter-list"
                  >
                    <a
                      class="button-filter"
                      :href="createURL(item)"
                      @click.prevent="refine(item.value)"
                    >
                      <ais-highlight attribute="item" :hit="item" />
                    </a>
                  </li>
                </ul>
              </div>
            </ais-refinement-list>
          </transition>
          <div class="line"></div>
        </div>
        <div class="filters-content">
          <div class="title" @click="showMaterialMethod()">
            <h3>FRAME MATERIAL</h3>
            <p>-</p>
          </div>
          <transition name="fade">
            <ais-refinement-list
              v-if="!showMaterial"
              attribute="FRAMEMATERIAL"
              searchable
              show-more
            >
              <div slot-scope="{ items, isFromSearch, refine, createURL }">
                <ul>
                  <li v-if="isFromSearch && !items.length">No results.</li>
                  <li
                    v-for="item in items"
                    :key="item.value"
                    class="filter-list"
                  >
                    <a
                      class="button-filter"
                      :href="createURL(item)"
                      @click.prevent="refine(item.value)"
                    >
                      <ais-highlight attribute="item" :hit="item" />
                    </a>
                  </li>
                </ul>
              </div>
            </ais-refinement-list>
          </transition>
          <div class="line"></div>
        </div>
        <div class="filters-content">
          <div class="title" @click="showGenderMethod()">
            <h3>GENDER</h3>
            <p>-</p>
          </div>
          <transition name="fade">
            <ais-refinement-list
              v-if="!showGender"
              attribute="GENDER"
              searchable
              show-more
            >
              <div slot-scope="{ items, isFromSearch, refine, createURL }">
                <ul>
                  <li v-if="isFromSearch && !items.length">No results.</li>
                  <li
                    v-for="item in items"
                    :key="item.value"
                    class="filter-list"
                  >
                    <a
                      class="button-filter"
                      :href="createURL(item)"
                      @click.prevent="refine(item.value)"
                    >
                      <ais-highlight attribute="item" :hit="item" />
                    </a>
                  </li>
                </ul>
              </div>
            </ais-refinement-list>
          </transition>
          <div class="line"></div>
        </div>
        <div class="filters-content">
          <div class="title" @click="showColorMethod()">
            <h3>COLORS</h3>
            <p>-</p>
          </div>
          <transition name="fade">
            <ais-refinement-list
              v-if="!showColor"
              attribute="color"
              searchable
              show-more
            >
              <div slot-scope="{ items, isFromSearch, refine, createURL }">
                <ul>
                  <li v-if="isFromSearch && !items.length">No results.</li>
                  <li
                    v-for="item in items"
                    :key="item.value"
                    class="filter-list"
                  >
                    <a
                      class="button-filter"
                      :href="createURL(item)"
                      @click.prevent="refine(item.value)"
                    >
                      <ais-highlight attribute="item" :hit="item" />
                    </a>
                  </li>
                </ul>
              </div>
            </ais-refinement-list>
          </transition>
          <div class="line"></div>
        </div>
        <div class="filters-content">
          <div class="title" @click="showSizeMethod()">
            <h3>SIZE</h3>
            <p>-</p>
          </div>
          <transition name="fade">
            <ais-refinement-list
              v-if="!showSize"
              attribute="size"
              searchable
              show-more
            >
              <div slot-scope="{ items, isFromSearch, refine, createURL }">
                <ul>
                  <li v-if="isFromSearch && !items.length">No results.</li>
                  <li
                    v-for="item in items"
                    :key="item.value"
                    class="filter-list"
                  >
                    <a
                      class="button-filter"
                      :href="createURL(item)"
                      @click.prevent="refine(item.value)"
                    >
                      <ais-highlight attribute="item" :hit="item" />
                    </a>
                  </li>
                </ul>
              </div>
            </ais-refinement-list>
          </transition>
          <div class="line"></div>
        </div>
        <!-- <div class="filters-content">
          <div class="title">
            <h3>PRICE</h3>
            <p>-</p>
          </div>
          <ais-range-input attribute="price">
            <div slot-scope="{ currentRefinement, range, refine }">
              +
              {{ range }}
              <vue-slider
                :min="range.min"
                :max="range.max"
                :value="toValue(currentRefinement, range)"
                @change="refine({ min: $event[0], max: $event[1] })"
              />
            </div>
          </ais-range-input>
          <div class="line"></div>
        </div> -->
      </div>
    </div>
  </transition>
</template>

<script>
// import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  name: "Filters",
  components: {
    // VueSlider,
  },
  props: ["showFilter"],
  data() {
    return {
      showColor: false,
      showMaterial: false,
      showFilters: false,
      showShapes: false,
      showGender: false,
      showSize: false,
    };
  },
  methods: {
    showColorMethod() {
      this.showColor = !this.showColor;
    },
    showMaterialMethod() {
      this.showMaterial = !this.showMaterial;
    },
    showShapeMethod() {
      this.showShapes = !this.showShapes;
    },
    showGenderMethod() {
      this.showGender = !this.showGender;
    },
    showSizeMethod() {
      this.showSize = !this.showSize;
    },
    toValue(value, range) {
      return [
        value.min !== null ? value.min : range.min,
        value.max !== null ? value.max : range.max,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  width: 70%;
  will-change: width;
  margin: 0 auto;
  .filterBtn {
    display: -webkit-flex;
    display: flex;
    margin: 1.2em 0;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    justify-content: space-between;

    :nth-child(1) {
      /* margin-right: 0.5rem; */
    }

    p {
      font-size: 0.8rem;
    }
  }
  .filters-content {
    .line {
      border-bottom: 1px solid #e2e2e5;
      width: 70%;
      margin: 1em auto 1em auto;
    }
    .filter-list {
      width: 100%;
      .button-filter {
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
      }
    }
    .title {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 1rem;
        color: #1f1f24;
        text-transform: uppercase;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

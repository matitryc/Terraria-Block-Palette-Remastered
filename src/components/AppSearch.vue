<template>
  <div
    class="search-bar-box flex text-2xl"
    :class="{ active: searchValue != '' }"
  >
    <div class="search-bar w-full">
      <input
        v-model="searchValue"
        class="relative w-full"
        type="text"
        :placeholder="placeholder"
        @input="emit('valueChange', searchValue)"
        @keyup.enter="search"
      >
    </div>
    <button
      class="search-button relative"
      @click.prevent="search"
    >
      <div
        class="search-icon-box w-full h-full"
      >
        <img
          src="@/assets/search-alt.svg"
          alt=""
          class="icon default absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5"
        >
        <img
          src="@/assets/search-alt.svg"
          alt=""
          class="icon focus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5"
        >
      </div>
    </button>
    <div
      v-if="searchValue != ''"
      class="search-results-box"
    >
      <div
        v-if="results.length > 0"
        class="search-results"
      >
        <div
          v-for="result in results"
          :key="result"
          class="w-full"
        >
          <AppSearchResult
            :text="result"
            @click.prevent="search(result)"
          />
        </div>
      </div>
      <div
        v-else
        class="search-results no-results"
      >
        <span class="search-result">No results found.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  placeholder: {
    type: String,
    required: true
  },
  results: {
    type: Array,
    default: null
  }
})
const emit = defineEmits(['valueChange', 'searchSuccess'])
const searchValue = ref('')
const search = (passedValue) => {
  if(props.results.length > 0){
    if(typeof passedValue === 'string'){
      emit('searchSuccess', passedValue)
      searchValue.value = ''
    } else {
      emit('searchSuccess', props.results[0])
      searchValue.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar-box {
  position: relative;
  border: 3px solid $black-main;
  background-color: $white-darker;
  border-radius: 100vw;
  &.active {
    border-radius: 27px 27px 0 0;
  }
  &.active input,
  &.active .search-bar {
    border-radius: 20px 0 0 0;
  }
  &.active .search-button::before,
  &.active .search-button {
    border-radius: 0 20px 0 0;
  }
}
.search-button::before {
  border-radius: 0 100vw 100vw 0;
}

.search-bar {
  position: relative;
  background-color: $white-darker;
  color: $black-main;
  border-right: 3px solid $black-main;
  border-radius: 100vw 0 0 100vw;
  &.active {
    border-radius: 100vw 0 0 0;
  }
}
.search-button {
  min-width: 50px;
  border-radius: 0 100vw 100vw 0;
  background-color: $white-darker;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $purple-main;
    opacity: 0;
    transition: opacity .2s;
  }
  .focus {
    filter: $svg-to-white-main;
  }
  &:focus .default,
  &:hover .default {
    opacity: 0;
  }
  &:focus,
  &:hover {
    outline: none;
    .focus {
      opacity: 1;
    }
    &::before {
      opacity: 1;
    }
  }
}
$parent-border-width: 6px;
$offset-to-parent: 3px;
.search-results-box {
  height: Calc(100% + $offset-to-parent);
  z-index: 10;
}
.search-results {
  position: absolute;
  left: -$offset-to-parent;
  top: 100%;
  width: Calc(100% + $parent-border-width);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 3px solid $black-main;
  border-top: 0;
  background-color: $black-main;
  top: 100%;
  z-index: 11;
  overflow-y: auto;
  max-height: 250px;
  &.no-results {
    align-items: flex-start;
  }
  & div:nth-child(even) .search-result {
    background-color: $black-main-lighter;
  }
}
::-webkit-scrollbar {
    border-radius: 0;
}
::-webkit-scrollbar-track {
  margin-block: .25em;
}
@media (min-width: 576px) {
  .search-bar-box.active input,
  .search-bar-box.active .search-bar {
    border-radius: 24px 0 0 0;
  }
  .search-bar-box.active .search-button::before,
  .search-bar-box.active .search-button {
    border-radius: 0 24px 0 0;
  }
}
@media (min-width: 768px) {
  .search-bar {
    &-box {
      font-size: 1.65rem;
    }
    input {
      padding: 0.4em .8em;
    }
  }
  .search-bar-box.active input,
  .search-bar-box.active .search-bar {
    border-radius: 25px 0 0 0;
  }
  .search-bar-box.active .search-button::before,
  .search-bar-box.active .search-button {
    border-radius: 0 25px 0 0;
  }
}
</style>
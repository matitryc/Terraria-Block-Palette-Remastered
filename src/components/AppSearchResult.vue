<template>
  <button
    v-if="text"
    class="search-result w-full"
  >
    {{ text }}
    <img
      src="@/assets/search-alt.svg"
      alt=""
      class="z-20"
    >
  </button>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
const textForBind = ref(`"${props.text}"`)
</script>

<style lang="scss">
.search-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: .5em;
  color: $white-main;
  text-align: left;
  z-index: 20;
  img {
    filter: $svg-to-white-main;
  }
  &:first-child {
    border-top: 0;
  }
  &::before {
    content: v-bind(textForBind);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0.5em;
    background-color: $black-light;
    opacity: 0;
    transition: opacity .3s;
    z-index: 10;
  }
  &:hover::before {
    opacity: 1;
  }
}
</style>
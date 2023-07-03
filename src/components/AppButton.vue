<template>
  <button
    v-if="link === ''"
    class="button relative text-3xl md:text-4xl rounded-xl border-4"
    :class="buttonClasses"
  >
    <span
      class="btn-text px-10 md:px-12 py-3 md:py-5 rounded-lg"
    >
      {{ text }}
    </span>
  </button>
  <a
    v-else
    :href="props.link"
    class="button relative text-3xl md:text-4xl rounded-xl border-4"
    :class="buttonClasses"
  >
    <span
      class="btn-text px-10 md:px-12 py-3 md:py-5 rounded-lg"
    >
      {{ text }}
    </span>
  </a>
</template>
<script setup>
import { ref, reactive } from 'vue'
const props = defineProps({
  primary: {
    type: Boolean,
    default: false
  },
  secondary: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  }
})
const textForBind = ref(`"${props.text}"`)
const buttonClasses = reactive({ 
  primary: props.primary, 
  secondary: props.secondary 
})
</script>
<style lang="scss">
.button {
  &::before {
    content: v-bind(textForBind);
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: $white-main;
    border-width: 3px;
    border-radius: 8px;
    opacity: 0;
    transition: color .1s, opacity 0.1s;
  }
  .btn-text {
    display: block;
    width: 100%;
    height: 100%;
    border-width: 3px;
  }
  &:focus {
    outline: none;
  }
  &:hover, &:focus {
    .inner {
      opacity: 0;
    }
    &::before {
      opacity: 1;
    }
  }
}
.primary {
  background-color: $purple-main;
  & .btn-text {
    color: $white-main;
    border-color: $black-main;
  }
  &::before {
    color: $purple-text;
    background-color: $white-main;
    border-color: $black-main
  }
}
.secondary {
  background-color: $white-main;
  color: $black-main;
  & .btn-text {
    border-color: $black-main;
  }
  &::before{
    background-color: $black-main;
    border-color: $black-main;
  }
  &:hover, &:focus {
    color: $white-main;
  }
}
</style>
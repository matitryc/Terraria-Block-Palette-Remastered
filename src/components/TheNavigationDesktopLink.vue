<template>
  <li class="desktop-li">
    <AppLink
      :link="link"
      class="desktop-link relative block text-2xl xl:text-3xl px-10 py-7 cursor-pointer"
    />
  </li>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  link: {
    type: Object,
    required: true
  }
})
const textForBind = ref(`"${props.link.text}"`)
</script>

<style lang="scss" scoped>

.desktop-link{
  transition: opacity .3s;
  border-left: 1px solid $white-main;
  &:focus {
    outline: none;
  }
  &::before,
  &::after {
    content: v-bind(textForBind);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-left: 1px solid $white-main;
    opacity: 0;
    transition: opacity .3s;
  }
  //active
  &::before {
    background-color: $green-darker;
  }
  //hover
  &::after {
    background-color: $white-main;
    color: $black-main;
  }
  &.active::before {
    opacity: 1;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
  }

}
@media (min-width: 1200px) {
  .desktop-li {
    &:last-child {
      border-right: 1px solid $white-main;
      &::before,
      &::after {
        border-right: 1px solid $white-main;
      }
    }
  }
}
</style>
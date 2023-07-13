<template>
  <nav class="fixed top-0 z-50">
    <div class="mobile absolute top-0 lg:invisible">
      <div
        class="mobile-container relative top-0 flex justify-end wrapper"
        @resize="setNavMobileContainerHeight"
      >
        <a
          href="#"
          class="absolute left-0 top-1/2 -translate-y-1/2 ml-5 sm:ml-7 md:ml-8 p-3 text-4xl"
        >
          TbP
        </a>
        <button
          aria-label="Nav mobile menu toggler"
          class="burger flex flex-col mr-5 sm:mr-7 md:mr-7 p-4 w-max"
          :class="{ active: isMobileActive }"
          @click="handleBurger"
        >
          <div
            v-for="(index) in [1, 2, 3]"
            :key="index"
            class="burger-bar"
          />
        </button>
      </div>
      <div
        class="mobile-list-container p-5"
        :class="{ active: isMobileActive}"
      >
        <ul class="flex flex-col justify-start items-center w-full overflow-y-scroll">
          <TheNavigationMobileLink
            v-for="(link, index) in navLinks"
            :key="index"
            :link="link"
            @close="handleBurger"
          />
        </ul>
      </div>
    </div>
    <div class="desktop absolute top-0 w-full invisible lg:visible">
      <div class="wrapper flex justify-between items-center">
        <a
          href="#"
          class="desktop-logo block text-4xl xl:text-5xl ml-11 cursor-pointer"
        >
          TbP
        </a>
        <ul class="flex">
          <TheNavigationDesktopLink
            v-for="(link, index) in navLinks"
            :key="index"
            :link="link"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollLock } from '@vueuse/core'
import setScrollPadding from '@/js/setScrollPadding.js'
import TheNavigationDesktopLink from '@/components/TheNavigationDesktopLink.vue'
import TheNavigationMobileLink from '@/components/TheNavigationMobileLink.vue'

defineProps({
  navLinks: {
    type: Array,
    required: true
  }
})
const isMobileActive = ref(false)
const isBodyLocked = useScrollLock(document.body)
const handleBurger = () => {
  isMobileActive.value = !isMobileActive.value
  isBodyLocked.value = !isBodyLocked.value
}
window.addEventListener('resize', () => {
  setScrollPadding()
  if(document.body.offsetWidth > 992) {
    isMobileActive.value = false
    isBodyLocked.value = false
  }
})
</script>

<style lang="scss" scoped>
nav {
  width: 100vw;
}
nav > div {
  width: 100vw;
  background-color: $black-main;
  border-bottom: solid 1px $white-main;
}

.burger {
  gap: .45rem;
  &.active .burger-bar:nth-child(odd) {
    opacity: 0;
  }
  &.active {
    .burger-bar:nth-child(2) {
      transform: rotate(-45deg);
    } 
    .burger-bar:nth-child(2)::before {
      opacity: 1;
      transform: rotate(90deg);
    }

    .mobile-list {
      transform: translateX(0);
    }
  }
  &-bar {
    position: relative;
    width: 35px;
    height: 4px;
    border-radius: 2px;
    background-color: $white-main;
    transition: opacity .2s, transform .2s;
    &:nth-child(2) {
      transform: rotate(0);
    }
    &:nth-child(2)::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 2px;
      background-color: $white-main;
      transition: opacity .2s, transform .2s;
      transform: rotate(0);
      opacity: 0;
    }
  }
}
.mobile-list-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: Calc(100vh - 69px);
  background-color: $black-main;
  transform: translateX(150%);
  transition: transform .5s;
  &.active {
    transform: translateX(0);
  }
  @include scrollbar-reset;
}

@media (min-width: 1250px) {
  .desktop-logo {
    margin-left: 0;
  }
}
</style>
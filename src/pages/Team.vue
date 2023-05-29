<template>
  <TheNavigation :nav-links="navLinks" />
  <main>
    <section class="section team flex flex-col">
      <h2 class="section-title">
        The Team
      </h2>
      <p class="section-text">
        This the team. Yeah I'm a nobody :DD
      </p>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import TheNavigation from '@/components/TheNavigation.vue'
import setScrollPadding from '@/js/setScrollPadding'

const navLinks = [
  {
    text: 'Team',
    href: '',
    isSamePage: true
  },
  {
    text: 'Home',
    href: '',
    componentName: 'Home',
    isSamePage: false
  }
]
onMounted(() => {
  setScrollPadding()
})
</script>
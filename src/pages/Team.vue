<template>
  <TheNavigation :nav-links="navLinks" />
  <main>
    <section class="section team flex flex-col">
      <div class="wrapper">
        <h2 class="section-title">
          The Team
        </h2>
        <p class="section-text">
          For now, only I (Mateusz Tryc) am working on this project. I plan to hire someone to do some cool graphics and maybe send this to some internet Terraria celebrity so it gets some recognition. : )
        </p>
      </div>
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